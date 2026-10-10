export const metadata = {
  title: "Admin Portal | ChittorTech™ IT Systems",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AdminLayout({ children }) {
  return (
    <>
      <style>{`
        /* Isolate Admin Portal: hide public header, footer, floating chatbot & trial modals */
        .ct-header,
        .ct-strip,
        header.header-area,
        header.main-header,
        footer,
        .footer-area,
        #chatbot-root,
        .chatbot-container,
        .chatbot-bubble,
        .chat-toggler,
        #trialModal,
        .modal-backdrop,
        .whatsapp-chat-button,
        .floating-whatsapp {
          display: none !important;
        }
        body {
          background-color: #ffffff !important;
          margin: 0 !important;
          padding: 0 !important;
          color: #0f172a !important;
          font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
          -webkit-font-smoothing: antialiased !important;
        }
      `}</style>
      <div id="admin-portal-root" style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
        {children}
      </div>
    </>
  );
}
