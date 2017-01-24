'use strict';

// A sample container service metered by memory consumption over time

/* istanbul ignore file */

module.exports = {
  plan_id: 'blockchain-pricing-basic',
  metrics: [
    {
      name: 'classifier_instances',
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
    },
     {
      name: 'classifier_api_calls',
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
    },
     {
      name: 'training_event_api_calls',
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

