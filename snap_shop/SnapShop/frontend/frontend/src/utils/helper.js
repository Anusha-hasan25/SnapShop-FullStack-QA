/**
 * Utility function to format numbers into PKR currency format for SnapShop 💎
 * @param {number} amount 
 * @returns {string}
 */
export const formatPrice = (amount) => {
  if (amount === undefined || amount === null) return "PKR 0";
  
  // Ensure the amount is treated as a number
  const numericAmount = typeof amount === 'string' ? parseFloat(amount.replace(/,/g, '')) : amount;
  
  if (isNaN(numericAmount)) return "PKR 0";

  return new Intl.NumberFormat('en-PK', {
    style: 'currency',
    currency: 'PKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericAmount).replace('PKR', 'PKR ');
};