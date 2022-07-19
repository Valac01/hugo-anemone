console.log("from shareBtn.ts");

const shareBtn = document.querySelector("#share-btn") as HTMLDivElement;

if (!navigator.share && shareBtn) {
  // Removing the node from view
  shareBtn.remove();
} else if (shareBtn) {
  // If the page has shareBtn
  const shareData = {
    title: shareBtn.dataset.title,
    text: shareBtn.dataset.text,
    url: shareBtn.dataset.url,
  };

  shareBtn.addEventListener("click", async () => {
    console.log("Pressed Share", shareData);
    try {
      await navigator.share(shareData);
      console.log("Shared successfully");
    } catch (err) {
      console.log("Error: " + err);
    }
  });
}
