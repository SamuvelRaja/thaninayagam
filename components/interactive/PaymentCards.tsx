"use client";

import React, { useState } from "react";

const CopyIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface PaymentCardsProps {
  lang: "ta" | "en";
}

export const PaymentCards: React.FC<PaymentCardsProps> = ({ lang }) => {
  const isTa = lang === "ta";

  // Official verified details for archive contributions
  const payeeName = "KESAVAN MANIVANNAN";
  const upiId = "kesavan2510-5@oksbi";
  const gpayNumber = "8015469260";
  const accNo = "009002000002557";
  const bankName = "INDIAN OVERSEAS BANK";
  const branchName = "THILLAINAGAR BRANCH, TRICHY";
  const ifsc = "IOBA0000090";
  const whatsappNumber = "7200111312";

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2000);
    }
  };

  const renderCopyButton = (text: string, key: string, label: string) => {
    const isCopied = copiedKey === key;
    return (
      <button
        type="button"
        className={`rt-btn copy-btn ${isCopied ? "is-copied" : ""}`}
        onClick={() => copyToClipboard(text, key)}
        aria-label={label}
      >
        {isCopied ? (
          <>
            <CheckIcon />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <CopyIcon />
            <span>Copy</span>
          </>
        )}
      </button>
    );
  };

  const upiDeepLink = `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent("Kesavan Manivannan")}&cu=INR`;

  return (
    <div className="payment-grid" id="payment-details">
      {/* UPI Card */}
      <div className="pay-card pay-card-upi">
        <div className="pay-card-header">
          <span className="pay-badge">{isTa ? "உடனடி நிதி உதவி · கட்டணமில்லை" : "FAST & DIRECT · ZERO FEES"}</span>
          <h3>{isTa ? "உடனடி UPI / QR குறியீடு" : "Instant UPI & QR Code"}</h3>
          <p>
            {isTa
              ? "கூகுள் பே (GPay), போன்பே (PhonePe), பேடிஎம் (Paytm) அல்லது எந்தவொரு UPI செயலி மூலமும் நேரடியாக அனுப்பலாம்."
              : "Instant zero-fee transfer via Google Pay, PhonePe, Paytm, BHIM, or any UPI app."}
          </p>
        </div>

        <div className="qr-visual-box">
          <div className="upi-payee-badge">
            <span>{isTa ? "பெறுநர்:" : "Payee:"}</span>
            <strong>{payeeName}</strong>
          </div>

          <div className="qr-image-card">
            <img
              src="/images/donate-qr-clean.png"
              alt={`UPI QR Code - ${payeeName} (${upiId})`}
              width={180}
              height={180}
              className="qr-img"
            />
            <span className="qr-scan-hint">
              {isTa ? "எந்தவொரு UPI செயலியிலும் ஸ்கேன் செய்யவும்" : "Scan to pay with any UPI app"}
            </span>
          </div>

          <div className="upi-id-box">
            <span className="upi-label">UPI ID:</span>
            <code className="upi-code">{upiId}</code>
            {renderCopyButton(upiId, "upi", isTa ? "UPI ID நகலெடு" : "Copy UPI ID")}
          </div>

          <div className="gpay-box">
            <span className="upi-label">{isTa ? "GPay எண்:" : "GPay No:"}</span>
            <code className="upi-code">{gpayNumber}</code>
            {renderCopyButton(gpayNumber, "gpay", isTa ? "GPay எண் நகலெடு" : "Copy GPay number")}
          </div>

          <a href={upiDeepLink} className="upi-mobile-pay-btn">
            <span>📱</span>
            <span>{isTa ? "மொபைல் செயலியில் செலுத்த (UPI App)" : "Pay directly via UPI App"}</span>
          </a>

          <a
            href="/images/donate-qr-full.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="qr-enlarge-link"
          >
            {isTa ? "முழு அதிகாரப்பூர்வ QR அட்டையைப் பார்க்க ↗" : "View full official QR card ↗"}
          </a>
        </div>

        <div className="pay-card-foot">
          <span className="upi-apps">GPay · PhonePe · Paytm · BHIM · Any Bank UPI</span>
        </div>
      </div>

      {/* Bank Transfer Card */}
      <div className="pay-card pay-card-bank">
        <div className="pay-card-header">
          <span className="pay-badge">NEFT / IMPS / RTGS · DIRECT TRANSFER</span>
          <h3>{isTa ? "நேரடி வங்கிக் கணக்கு விவரங்கள்" : "Direct Bank Transfer"}</h3>
          <p>
            {isTa
              ? "இந்திய மற்றும் வெளிநாட்டு வங்கிகளிலிருந்து நெஃப்ட், ஐ.எம்.பி.எஸ் அல்லது ஆர்.டி.ஜி.எஸ் வழியாக நேரடியாக அனுப்பலாம்."
              : "Direct transfers from all Indian and international banks via NEFT, IMPS, or RTGS."}
          </p>
        </div>

        <table className="bank-details-table">
          <tbody>
            <tr>
              <th>{isTa ? "கணக்கு பெயர்" : "Account Name"}</th>
              <td>
                <div className="cell-copy-wrap">
                  <strong>{payeeName}</strong>
                  {renderCopyButton(payeeName, "name", isTa ? "பெயரை நகலெடு" : "Copy Name")}
                </div>
              </td>
            </tr>
            <tr>
              <th>{isTa ? "வங்கி" : "Bank"}</th>
              <td>
                <strong>{isTa ? "இந்தியன் ஓவர்சீஸ் வங்கி" : "Indian Overseas Bank"} (IOB)</strong>
              </td>
            </tr>
            <tr>
              <th>{isTa ? "கிளை" : "Branch"}</th>
              <td>{isTa ? "தில்லைநகர் கிளை, திருச்சி" : "Thillainagar Branch, Trichy"}</td>
            </tr>
            <tr>
              <th>{isTa ? "கணக்கு எண்" : "Account No"}</th>
              <td>
                <div className="cell-copy-wrap">
                  <code>{accNo}</code>
                  {renderCopyButton(accNo, "acc", isTa ? "கணக்கு எண் நகலெடு" : "Copy Account Number")}
                </div>
              </td>
            </tr>
            <tr>
              <th>{isTa ? "IFSC குறியீடு" : "IFSC Code"}</th>
              <td>
                <div className="cell-copy-wrap">
                  <code>{ifsc}</code>
                  {renderCopyButton(ifsc, "ifsc", isTa ? "IFSC குறியீடு நகலெடு" : "Copy IFSC Code")}
                </div>
              </td>
            </tr>
            <tr>
              <th>{isTa ? "GPay எண்" : "GPay Number"}</th>
              <td>
                <div className="cell-copy-wrap">
                  <code>{gpayNumber}</code>
                  {renderCopyButton(gpayNumber, "gpay-bank", isTa ? "GPay எண் நகலெடு" : "Copy GPay Number")}
                </div>
              </td>
            </tr>
            <tr>
              <th>{isTa ? "கணக்கு வகை" : "Account Type"}</th>
              <td>{isTa ? "சேமிப்புக் கணக்கு" : "Savings Account"}</td>
            </tr>
            <tr>
              <th>{isTa ? "சர்வதேச நிதி / உதவி" : "International / Help"}</th>
              <td>
                <div style={{ fontSize: "0.82rem", lineHeight: "1.7" }}>
                  <span>WhatsApp: </span>
                  <a
                    href={`https://wa.me/91${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontWeight: 600, color: "#128C7E", textDecoration: "underline" }}
                  >
                    +91 {whatsappNumber}
                  </a>
                  <br />
                  <span>Email: </span>
                  <a href="mailto:kesavan@alarveliyeedu.com">kesavan@alarveliyeedu.com</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
