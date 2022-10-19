export function unifyEmailProtectedAddresses(document) {
  [...document.querySelectorAll("a[href^='/cdn-cgi/l/email-protection']")].forEach(link => {
    link.parentNode.innerHTML = link.parentNode.innerHTML.replace(/<a href="\/cdn-cgi\/l\/email-protection" [^>]+>\[email&#160;protected\]<\/a>[coffeemeetsbagel.com]*/gmi, '[email&#160;protected]');
  });
}
