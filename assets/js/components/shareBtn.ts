import { showToast } from './toast'
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
    try {
      await navigator.share(shareData);
    } catch (err) {
      showToast("Some error occured while sharing. Try to manually share the link")
    }
  });
}
