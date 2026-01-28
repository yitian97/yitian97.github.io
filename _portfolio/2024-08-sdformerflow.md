---
title: "Spiking Neural Network Transformer for Event-based optical flow estimation"
short_title: "SDformerFlow"
collection: portfolio
date: 2024-08-01
description: 'The first fully spiking transformer-based architecture for optical flow estimation using event cameras. The method achieves state-of-the-art performance among SNN-based approaches with significant power reduction.'
excerpt: 'Event cameras generate asynchronous and sparse event streams capturing changes in light intensity. They offer significant advantages over conventional frame-based cameras, such as a higher dynamic range and an extremely faster data rate, making them particularly useful in scenarios involving fast motion or challenging lighting conditions. Spiking neural networks (SNNs) share similar asynchronous and sparse characteristics and are well-suited for processing data from event cameras. Inspired by the potential of transformers and spike-driven transformers (spikeformers) in other computer vision tasks, we propose two solutions for fast and robust optical flow estimation for event cameras: STTFlowNet and SDformerFlow. STTFlowNet adopts a U-shaped artificial neural network (ANN) architecture with spatiotemporal shifted window self-attention (swin) transformer encoders, while SDformerFlow presents its fully spiking counterpart, incorporating swin spikeformer encoders. Furthermore, we present two variants of the spiking version with different neuron models. Our work is the first to make use of spikeformers for dense optical flow estimation. We conduct end-to-end training for all models using supervised learning. Our results yield state-of-the-art performance among SNN-based event optical flow methods on both the DSEC and MVSEC datasets, and show significant reduction in power consumption compared to the equivalent ANNs. 


<img src="/files/sdformerflow.png" width="960" height="540" />


<img src="/files/SDFormerflow.gif" width="960" height="231" />'
header:
  teaser: /files/sdformerflow.png
skills:
  - Deep Learning
  - Surrogate gradient
  - Event Cameras
  - Transformers
  - Optical Flow
  - Python
  - PyTorch

link: https://www.iri.upc.edu/project/show/274 
paperurl: https://arxiv.org/abs/2409.04082
codeurl: https://github.com/yitian97/SDformerFlow
---
