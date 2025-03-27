const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, '.env');
const frontendPath = path.join(__dirname, 'frontend', '.env');
const backendPath = path.join(__dirname, 'backend', '.env');

try {
    const envContent = fs.readFileSync(srcPath, 'utf8');
    fs.writeFileSync(frontendPath, envContent);
    fs.writeFileSync(backendPath, envContent);
    console.log('✅ .env успешно скопирован в frontend и backend');
} catch (error) {
    console.error('❌ Ошибка копирования .env файлов:', error.message);
}
