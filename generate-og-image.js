const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const path = require('path');

// Register custom fonts if you have them locally
// registerFont('path/to/Amarante.ttf', { family: 'Amarante' });
// registerFont('path/to/Faculty-Glyphic.ttf', { family: 'Faculty Glyphic' });

async function generateOGImage() {
  // Create canvas
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#000000');
  gradient.addColorStop(1, '#1a1a1a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add orange accent line
  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(0, 0, width, 8);

  // Add subtle pattern
  ctx.strokeStyle = '#333333';
  ctx.lineWidth = 1;
  for (let i = 0; i < width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }

  // Set text styles
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';

  // Main title
  ctx.font = 'bold 72px Arial, sans-serif';
  ctx.fillText('Tolulope Orina', width / 2, 200);

  // Subtitle
  ctx.font = '48px Arial, sans-serif';
  ctx.fillStyle = '#ff6b35';
  ctx.fillText('Solutions Architect & Data Scientist', width / 2, 280);

  // Description
  ctx.font = '32px Arial, sans-serif';
  ctx.fillStyle = '#cccccc';
  ctx.fillText('AWS Golden Jacket Holder', width / 2, 350);
  ctx.fillText('Cloud Architecture • Machine Learning • DevOps', width / 2, 400);

  // Bottom accent
  ctx.fillStyle = '#ff6b35';
  ctx.fillRect(width / 2 - 100, height - 80, 200, 4);

  // Add your profile picture if available
  try {
    const profileImage = await loadImage('./public/profile.jpg');
    const imageSize = 120;
    const imageX = width - 150;
    const imageY = height - 150;
    
    // Create circular mask
    ctx.save();
    ctx.beginPath();
    ctx.arc(imageX + imageSize/2, imageY + imageSize/2, imageSize/2, 0, 2 * Math.PI);
    ctx.clip();
    
    // Draw image
    ctx.drawImage(profileImage, imageX, imageY, imageSize, imageSize);
    ctx.restore();
    
    // Add border
    ctx.strokeStyle = '#ff6b35';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(imageX + imageSize/2, imageY + imageSize/2, imageSize/2, 0, 2 * Math.PI);
    ctx.stroke();
  } catch (error) {
    console.log('Profile image not found, skipping...');
  }

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./public/og-image.png', buffer);
  console.log('✅ Open Graph image generated: public/og-image.png');

  // Save as JPEG
  const jpegBuffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  fs.writeFileSync('./public/og-image.jpg', jpegBuffer);
  console.log('✅ Open Graph image generated: public/og-image.jpg');
}

// Generate the image
generateOGImage().catch(console.error);
