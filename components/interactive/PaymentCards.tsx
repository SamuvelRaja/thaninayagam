"use client";

import React, { useState } from "react";

interface PaymentCardsProps {
  lang: "ta" | "en";
}

export const PaymentCards: React.FC<PaymentCardsProps> = ({ lang }) => {
  const isTa = lang === "ta";
  const upiId = "thaninayagam@upi";
  const accNo = "4218 0921 5543";
  const accNoRaw = "421809215543";
  const ifsc = "SBIN0001234";

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="payment-grid" id="payment-details">
      {/* UPI Card */}
      <div className="pay-card pay-card-upi">
        <div className="pay-card-header">
          <span className="pay-badge">FAST & DIRECT · ZERO FEES</span>
          <h3>{isTa ? "உடனடி UPI / QR குறியீடு" : "Instant UPI & QR Code"}</h3>
          <p>
            {isTa
              ? "கூகுள் பே, போன்பே, பேடிஎம் அல்லது எந்தவொரு UPI செயலி மூலமும் நேரடியாக அனுப்பலாம்."
              : "Instant zero-fee transfer via Google Pay, PhonePe, Paytm, BHIM, or any UPI app."}
          </p>
        </div>
        <div className="qr-visual-box">
          <div className="qr-placeholder" aria-label="UPI QR Code">
            <span className="qr-glyph">📱</span>
            <span className="qr-text">Scan with any UPI App</span>
          </div>
          <div className="upi-id-box">
            <span className="upi-label">UPI ID:</span>
            <code className="upi-code">{upiId}</code>
            <button
              type="button"
              className="rt-btn copy-btn"
              onClick={() => copyToClipboard(upiId, "upi")}
            >
              {copiedKey === "upi" ? (isTa ? "நகலெடுக்கப்பட்டது!" : "Copied!") : (isTa ? "நகல் செய்" : "Copy")}
            </button>
          </div>
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
              ? "இந்திய மற்றும் சர்வதேச வங்கிகளிலிருந்து நேரடியாக அனுப்பலாம்."
              : "Direct transfers from all Indian and international banks."}
          </p>
        </div>
        <table className="bank-details-table">
          <tbody>
            <tr>
              <th>{isTa ? "கணக்கு பெயர்" : "Account Name"}</th>
              <td><strong>Thani Nayagam Digital Archive Initiative</strong></td>
            </tr>
            <tr>
              <th>{isTa ? "வங்கி" : "Bank"}</th>
              <td>State Bank of India (SBI)</td>
            </tr>
            <tr>
              <th>{isTa ? "கணக்கு எண்" : "Account No"}</th>
              <td>
                <div className="cell-copy-wrap">
                  <code>{accNo}</code>
                  <button
                    type="button"
                    className="rt-btn copy-btn"
                    onClick={() => copyToClipboard(accNoRaw, "acc")}
                  >
                    {copiedKey === "acc" ? (isTa ? "நகலானது!" : "Copied!") : (isTa ? "நகல்" : "Copy")}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>{isTa ? "IFSC குறியீடு" : "IFSC Code"}</th>
              <td>
                <div className="cell-copy-wrap">
                  <code>{ifsc}</code>
                  <button
                    type="button"
                    className="rt-btn copy-btn"
                    onClick={() => copyToClipboard(ifsc, "ifsc")}
                  >
                    {copiedKey === "ifsc" ? (isTa ? "நகலானது!" : "Copied!") : (isTa ? "நகல்" : "Copy")}
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th>{isTa ? "கணக்கு வகை" : "Account Type"}</th>
              <td>{isTa ? "நிறுவன சேமிப்புக் கணக்கு" : "Institutional Savings / Current Account"}</td>
            </tr>
            <tr>
              <th>{isTa ? "சர்வதேச நன்கொடைகள்" : "International Donors"}</th>
              <td>
                {isTa
                  ? "SWIFT / IBAN விவரங்களுக்கு: "
                  : "For SWIFT / Wire details: "}
                <a href="mailto:kesavan@alarveliyeedu.com">kesavan@alarveliyeedu.com</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
