let SaneTube_interval;

(() => {
  const replacementUrl = 'http://youtube.com/feed/subscriptions';
  const redirectIfNecessary = () => {
    const currentUrl = window.location.href;

    if (currentUrl === 'https://www.youtube.com/') {
      window.location.href = replacementUrl;

    } else if (currentUrl.startsWith('https://www.youtube.com/shorts')) {
      window.location.href = replacementUrl;
    }
  }
  redirectIfNecessary();

  if (!SaneTube_interval) {
    SaneTube_interval = setInterval(() => {
      redirectIfNecessary();
    }, 5000);
  }
})();
