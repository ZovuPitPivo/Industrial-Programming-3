function extractImageURLs(html) {
  const regex = /<img[^>]+src="([^">]+)"/g;
  const imageUrls = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const imageUrl = match[1];
    imageUrls.push(imageUrl);
  }
  return imageUrls;
}

const html = `
  <html>
    <body>
      <img src="https://example.com/image1.jpg">
      <img src="https://example.com/image2.jpg">
      <img src="https://example.com/image3.jpg">
    </body>
  </html>
`;

const imageUrls = extractImageURLs(html);
console.log(imageUrls);