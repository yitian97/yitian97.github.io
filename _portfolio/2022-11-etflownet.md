---
title: "Event transformer FlowNet for optical flow estimation"
short_title: "ET-FlowNet"
collection: portfolio
date: 2022-11-01
description: 'ET-FlowNet is a hybrid RNN-ViT architecture for optical flow estimation using event cameras. We use visual transformers to capture global context in rigid body motion scenarios.'
excerpt: 'In this project, I developed ET-FlowNet, a hybrid RNN-ViT architecture for optical flow estimation using event cameras. This work represents the first time that transformers have been incorporated into event-based optical flow tasks. Event cameras are bioinspired sensors that produce asynchronous and sparse streams of events, offering advantages such as fast motion detection with low latency, high dynamic range, and low power consumption. I designed this architecture to address the need for fast and robust computation of optical flow for robotics applications. Visual transformers (ViTs) are ideal candidates for learning global context in visual tasks, and rigid body motion is a prime case for the use of ViTs since long-range dependencies in the image hold during rigid body motion. I performed end-to-end training using a self-supervised learning method. My results show comparable and in some cases exceeding performance with state-of-the-art coarse-to-fine event-based optical flow estimation.






<img src="/files/etflownet.png" width="960" height="540" />


<img src="/files/ET-FlowNet.gif" width="960" height="272" />'
header:
  teaser: /files/etflownet.png
skills:
  - Deep Learning
  - Event Cameras
  - Transformers
  - RNN
  - Self-Supervised Learning
  - Python
  - PyTorch

paperurl: http://www.iri.upc.edu/files/scidoc/2645-Event-transformer-FlowNet-for-optical-flow-estimation.pdf
---
