export function StatusIcon({ status }: { status: string }) {
  if (status === "pass")
    return (
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "rgba(16,185,129,0.12)",
          border: "1px solid rgba(16,185,129,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path
            d="M1.5 4.5L3.5 6.5L7.5 2.5"
            stroke="#10b981"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  if (status === "warn")
    return (
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "rgba(234,179,8,0.12)",
          border: "1px solid rgba(234,179,8,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
          <path
            d="M4.5 2v2.5M4.5 7v.2"
            stroke="#eab308"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  return (
    <span
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: "rgba(244,63,94,0.12)",
        border: "1px solid rgba(244,63,94,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path
          d="M2 2l5 5M7 2L2 7"
          stroke="#f43f5e"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
