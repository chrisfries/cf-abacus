'use strict';


/* istanbul ignore file */

module.exports = {
  plan_id: 'baas-pricing-basic',
  metrics: [
    {
      name: 'instances',
      prices: [
        {
          country: 'USA',
          price: 500
        },
        {
          country: 'EUR',
          price: 500
        },
        {
          country: 'CAN',
          price: 500
        }]
    },
    {
      name: 'api_calls',
      prices: [
        {
          country: 'USA',
          price: 0.00014
        },
        {
          country: 'EUR',
          price: 0.00010
        },
        {
          country: 'CAN',
          price: 0.00015
        }]
    }]
};

