import React from 'react';


export const DefaultVMS =  [
    {
        title: 'Cirrus',
        description: 'For light workloads that run over a longer period of time',
        cpu: '4 intel',
        gpu: false,
        ram: '16 GB',
        EC2type: 'TBD',
        path: '/'
    },
    {
        title: 'Cumulus',
        description: 'For computing heavy projects like simulating a game of chess',
        cpu: '10 intel',
        gpu: false,
        ram: '16 GB',
        EC2type: 'TBD',
        path: '/'
    }, 
    {
        title: 'Lenticulus',
        description: 'For highly parallelizable work, such as web scraping at scale',
        cpu: '24 intel',
        gpu: false,
        ram: '32 GB',
        EC2type: 'TBD',
        path: '/'
    }, 
    {
        title: 'Orographous',
        description: 'For training NLP models or model inference',
        cpu: '4 intel',
        gpu: '1 Nvidia A100',
        ram: '16 GB',
        EC2type: 'TBD',
        path: '/'
    },
    {
        title: 'Mammatus',
        description: 'Optimized for training and finetuning heavy ML models',
        cpu: '4 intel',
        gpu: '2 Nvidia A100',
        ram: '32 GB',
        EC2type: 'TBD',
        path: '/'
    },

]