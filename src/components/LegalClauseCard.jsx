"use client";

import React from "react";

export default function LegalClauseCard({
  id,
  clauseNumber,
  title,
  icon = "fa-solid fa-file-lines",
  badge,
  badgeType = "primary", // primary | amber | emerald | slate
  children,
}) {
  return (
    <article id={id} className="ct-clause-card">
      <header className="ct-clause-header">
        <div className="ct-clause-title-wrap">
          <div className="ct-clause-icon">
            <i className={icon}></i>
          </div>
          <div className="ct-clause-headings">
            <div className="ct-clause-meta">
              {clauseNumber && <span className="ct-clause-num">Clause {clauseNumber}</span>}
              {badge && <span className={`ct-clause-tag ${badgeType}`}>{badge}</span>}
            </div>
            <h2 className="ct-clause-title">{title}</h2>
          </div>
        </div>
      </header>

      <div className="ct-clause-body">
        {children}
      </div>

      <style jsx>{`
        .ct-clause-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px 24px;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.03);
          scroll-margin-top: 110px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          box-sizing: border-box;
          min-width: 0;
          overflow-x: hidden;
        }

        .ct-clause-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.05);
        }

        .ct-clause-header {
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
        }

        .ct-clause-title-wrap {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .ct-clause-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe);
          color: #2563eb;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
          border: 1px solid rgba(37, 99, 235, 0.15);
        }

        .ct-clause-headings {
          min-width: 0;
          flex: 1;
        }

        .ct-clause-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
          flex-wrap: wrap;
        }

        .ct-clause-num {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #2563eb;
        }

        .ct-clause-tag {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .ct-clause-tag.primary {
          background: #e0e7ff;
          color: #3730a3;
        }

        .ct-clause-tag.amber {
          background: #fef3c7;
          color: #92400e;
        }

        .ct-clause-tag.emerald {
          background: #dcfce7;
          color: #166534;
        }

        .ct-clause-tag.slate {
          background: #f1f5f9;
          color: #475569;
        }

        .ct-clause-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.3;
          word-break: break-word;
        }

        .ct-clause-body {
          color: #334155;
          font-size: 0.95rem;
          line-height: 1.7;
          min-width: 0;
          width: 100%;
        }

        .ct-clause-body :global(p) {
          margin-bottom: 14px;
          color: #475569;
          word-break: break-word;
        }

        .ct-clause-body :global(p:last-child) {
          margin-bottom: 0;
        }

        .ct-clause-body :global(ul) {
          padding-left: 0;
          margin-bottom: 16px;
          list-style: none;
        }

        .ct-clause-body :global(ul li) {
          position: relative;
          padding-left: 22px;
          margin-bottom: 10px;
          color: #334155;
          word-break: break-word;
        }

        .ct-clause-body :global(ul li::before) {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: #2563eb;
          font-weight: 800;
          font-size: 0.85rem;
        }

        .ct-clause-body :global(strong) {
          color: #0f172a;
          font-weight: 700;
        }

        /* Callout Box inside clause */
        .ct-clause-body :global(.clause-callout) {
          background: #f8fafc;
          border-left: 4px solid #2563eb;
          padding: 14px 16px;
          border-radius: 0 10px 10px 0;
          margin: 18px 0;
          border-top: 1px solid #e2e8f0;
          border-right: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          box-sizing: border-box;
          width: 100%;
        }

        .ct-clause-body :global(.clause-callout.warning) {
          border-left-color: #f59e0b;
          background: #fffbeb;
          border-color: #fef3c7;
        }

        .ct-clause-body :global(.clause-callout.success) {
          border-left-color: #10b981;
          background: #f0fdf4;
          border-color: #dcfce7;
        }

        .ct-clause-body :global(.clause-callout-title) {
          font-weight: 800;
          font-size: 0.9rem;
          color: #0f172a;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 5px;
        }

        /* Responsive Table Container with Horizontal Scroll */
        .ct-clause-body :global(.clause-table-wrap) {
          width: 100%;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin: 18px 0;
          border-radius: 10px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          position: relative;
        }

        .ct-clause-body :global(.clause-table-wrap::-webkit-scrollbar) {
          height: 6px;
        }

        .ct-clause-body :global(.clause-table-wrap::-webkit-scrollbar-thumb) {
          background: #cbd5e1;
          border-radius: 4px;
        }

        .ct-clause-body :global(.clause-table) {
          width: 100%;
          min-width: 540px; /* Ensures columns never get crushed on mobile */
          border-collapse: collapse;
          font-size: 0.86rem;
          text-align: left;
        }

        .ct-clause-body :global(.clause-table th) {
          background: #f1f5f9;
          color: #1e293b;
          font-weight: 700;
          padding: 10px 14px;
          border-bottom: 1px solid #cbd5e1;
          white-space: nowrap;
        }

        .ct-clause-body :global(.clause-table td) {
          padding: 10px 14px;
          border-bottom: 1px solid #e2e8f0;
          color: #475569;
          vertical-align: top;
        }

        .ct-clause-body :global(.clause-table tr:last-child td) {
          border-bottom: none;
        }

        .ct-clause-body :global(.clause-table tr:hover td) {
          background: #f8fafc;
        }

        /* Swipe indicator pill for mobile */
        .ct-clause-body :global(.table-scroll-hint) {
          display: none;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #2563eb;
          background: #eff6ff;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 6px;
          font-weight: 600;
          width: fit-content;
        }

        @media (max-width: 768px) {
          .ct-clause-body :global(.table-scroll-hint) {
            display: inline-flex;
          }
        }

        @media (max-width: 640px) {
          .ct-clause-card {
            padding: 18px 14px;
            border-radius: 14px;
          }

          .ct-clause-title {
            font-size: 1.15rem;
          }

          .ct-clause-body {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </article>
  );
}
