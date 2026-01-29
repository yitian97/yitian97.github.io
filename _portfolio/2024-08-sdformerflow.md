---
title: "Spiking Neural Network Transformer for Event-based optical flow estimation"
short_title: "SDformerFlow"
collection: portfolio
date: 2024-08-01
description: 'The first fully spiking transformer-based architecture for optical flow estimation using event cameras. The method achieves state-of-the-art performance among SNN-based approaches with significant power reduction.'
excerpt: 'I developed SDformerFlow, the first fully spiking transformer-based architecture for optical flow estimation using event cameras. This work was part of my research on combining event cameras with spiking neural networks (SNNs) for efficient motion estimation. I designed and implemented two solutions: STTFlowNet, a U-shaped artificial neural network (ANN) architecture with spatiotemporal shifted window self-attention (swin) transformer encoders, and SDformerFlow, its fully spiking counterpart incorporating swin spikeformer encoders. I also developed two variants of the spiking version with different neuron models. This work represents the first use of spikeformers for dense optical flow estimation. I conducted end-to-end training for all models using supervised learning, achieving state-of-the-art performance among SNN-based event optical flow methods on both the DSEC and MVSEC datasets, with significant reduction in power consumption compared to equivalent ANNs. 


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
