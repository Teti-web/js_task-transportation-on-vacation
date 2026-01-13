/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const THREE_DAYS_DISCOUNT = 20;
  const SEVEN_DAYS_DISCOUNT = 50;

  if (days < 3) {
    return days * BASE_PRICE;
  }

  if (days >= 3 && days <= 6) {
    return days * BASE_PRICE - THREE_DAYS_DISCOUNT;
  }

  return days * BASE_PRICE - SEVEN_DAYS_DISCOUNT;
}

module.exports = calculateRentalCost;
