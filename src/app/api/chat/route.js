import { NextResponse } from "next/server";
import { CHITTORTECH_KNOWLEDGE_BASE } from "@/data/chittortechKnowledgeBase";

export async function POST(req) {
  try {
    const { messages, pathname = "/", userName = "" } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Messages array is required." }, { status: 400 });
    }

    const groqKey =
      process.env.GROQ_API_KEY ||
      process.env.NEXT_PUBLIC_GROQ_API_KEY;

    const systemPrompt = {
      role: "system",
      content: `You are ChittorTech GPT, the official AI assistant and Customer Support Executive for ChittorTech.

CURRENT VISITOR CONTEXT:
- Active Page: ${pathname}
- Visitor Name: ${userName || "Valued Visitor"}

CRITICAL RESPONSE FORMAT RULES:
1. TABLES (IF APPLICABLE):
   - Keep tables compact with STRICTLY 2 COLUMNS (e.g. | Feature / Module | Highlights |).
   - Maximum 4 rows only! Never produce giant or multi-column wide tables.
2. WHY CHOOSE CHITTORTECH:
   - Keep to exactly 3 punchy bullet points (max 1 sentence each).
3. NEXT STEPS / ACTION:
   - NEVER ask the visitor long questionnaires.
   - Simply guide them directly with a short friendly note: "Ready to discuss your project? Get in touch with our team via our Contact page or WhatsApp!"
   - Always append '[ACTION:CONTACT]' or '[ACTION:WHATSAPP]' where appropriate.
4. BREVITY & CONVERSION:
   - Keep answers focused, crisp, and high-impact so visitors can read quickly.

OFFICIAL CHITTORTECH KNOWLEDGE BASE (SOURCE OF TRUTH):
${CHITTORTECH_KNOWLEDGE_BASE}`
    };

    const finalMessages = [systemPrompt, ...messages.slice(-12)];

    // 1. Primary Attempt: Groq Fast LPU (openai/gpt-oss-120b)
    if (groqKey) {
      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${groqKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "openai/gpt-oss-120b",
            messages: finalMessages,
            temperature: 0.7,
            max_tokens: 2048
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ success: true, reply });
          }
        }
      } catch (groqErr) {
        console.warn("Groq primary model error in Vercel route:", groqErr.message);
      }

      // 2. Secondary Attempt: Groq Fallback Model (openai/gpt-oss-20b or llama-3.3-70b-versatile)
      try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${groqKey}`,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: finalMessages,
            temperature: 0.7,
            max_tokens: 2048
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ success: true, reply });
          }
        }
      } catch (fallbackErr) {
        console.warn("Groq secondary model error in Vercel route:", fallbackErr.message);
      }
    }

    // 3. Tertiary Attempt: OpenRouter Free Models
    const openRouterKey = process.env.OPENROUTER_API_KEY || process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
    if (openRouterKey) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${openRouterKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://chittortech.in",
            "X-Title": "ChittorTech AI Chatbot"
          },
          body: JSON.stringify({
            model: "openrouter/free",
            messages: finalMessages,
            temperature: 0.7,
            max_tokens: 1500
          })
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ success: true, reply });
          }
        }
      } catch (orErr) {
        console.warn("OpenRouter tertiary error in Vercel route:", orErr.message);
      }
    }

    // Friendly fallback message if all AI providers are momentarily unavailable
    return NextResponse.json({
      success: true,
      reply: "Thank you for connecting with ChittorTech! Our solutions team is available right now. Please connect directly with our founder on WhatsApp (+91 75974 51057) or email business@chittortech.in to discuss your requirements. [ACTION:WHATSAPP]"
    });

  } catch (error) {
    console.error("Vercel /api/chat error:", error);
    return NextResponse.json(
      { success: false, error: "Internal chatbot error." },
      { status: 500 }
    );
  }
}
