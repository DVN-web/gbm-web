export function openImageFullscreen(src) {
  if (typeof document === "undefined") return;
  if (document.getElementById("image-fullscreen-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "image-fullscreen-overlay";
  Object.assign(overlay.style, {
    position: "fixed",
    inset: "0",
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: "9999",
  });

  const imgContainer = document.createElement("div");
  Object.assign(imgContainer.style, {
    position: "relative",
    display: "inline-block",
  });

  const img = document.createElement("img");
  img.src = src;
  img.draggable = false;
  Object.assign(img.style, {
    maxWidth: "90vw",
    maxHeight: "90vh",
    borderRadius: "10px",
    transition: "transform 0.2s ease",
    transformOrigin: "center center",
    cursor: "zoom-in",
    display: "block",
  });

  let scale = 1;

  // Создаём панель кнопок
  const controls = document.createElement("div");
  Object.assign(controls.style, {
    position: "absolute",
    top: "10px",
    right: "10px",
    display: "flex",
    gap: "8px",
    pointerEvents: "auto",
  });

  const makeBtn = (text, onClick) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = text;
    Object.assign(b.style, {
      padding: "8px 12px",
      fontSize: "16px",
      background: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    });
    b.onclick = (e) => {
      e.stopPropagation();
      onClick();
    };
    return b;
  };

  const zoomInBtn = makeBtn("+", () => { scale = Math.min(5, +(scale + 0.2).toFixed(2)); updateTransform(); });
  const zoomOutBtn = makeBtn("-", () => { scale = Math.max(0.4, +(scale - 0.2).toFixed(2)); updateTransform(); });
  
  const closeBtn = makeBtn("✕", () => overlay.remove());

  controls.appendChild(zoomInBtn);
  controls.appendChild(zoomOutBtn);
  controls.appendChild(closeBtn);

  imgContainer.appendChild(img);
  imgContainer.appendChild(controls);
  overlay.appendChild(imgContainer);
  document.body.appendChild(overlay);

  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });

  function updateTransform() {
    img.style.transform = `scale(${scale})`;
  }

  // Закрытие по Esc
  const handleKeyDown = (e) => { if (e.key === "Escape") overlay.remove(); };
  document.addEventListener("keydown", handleKeyDown);
}
