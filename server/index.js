require('dotenv').config();

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

console.log('==============================================');
console.log(' Student Management System - Environment Check');
console.log('==============================================');
console.log(`Node.js version : ${process.version}`);
console.log(`Environment      : ${NODE_ENV}`);
console.log(`Configured PORT  : ${PORT}`);
console.log('----------------------------------------------');

const requiredPackages = ['express', 'cors', 'dotenv', 'mysql2'];
let allInstalled = true;

requiredPackages.forEach((pkg) => {
  try {
    require.resolve(pkg);
    console.log(`[OK] ${pkg} is installed`);
  } catch (err) {
    allInstalled = false;
    console.log(`[MISSING] ${pkg} is NOT installed`);
  }
});

console.log('----------------------------------------------');

if (allInstalled) {
  console.log('✅ Environment is ready for Volume 1 development.');
} else {
  console.log('❌ Some dependencies are missing. Run "npm install" in /server.');
}

console.log('==============================================');