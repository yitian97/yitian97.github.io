---
title: "Event transformer FlowNet for optical flow estimation"
short_title: "ET-FlowNet"
collection: portfolio
date: 2022-11-01
description: 'ET-FlowNet is a hybrid RNN-ViT architecture for optical flow estimation using event cameras. We use visual transformers to capture global context in rigid body motion scenarios.'
excerpt: 'Event cameras are bioinspired sensors that produce asynchronous and sparse streams of events at image locations where intensity change is detected. They can detect fast motion with low latency, high dynamic range, and low power consumption. Over the past decade, efforts have been conducted in developing solutions with event cameras for robotics applications. In this work, we address their use for fast and robust computation of optical flow. We present ET-FlowNet, a hybrid RNN-ViT architecture for optical flow estimation. Visual transformers (ViTs) are ideal candidates for the learning of global context in visual tasks, and we argue that rigid body motion is a prime case for the use of ViTs since long-range dependencies in the image hold during rigid body motion. We perform end-to-end training with self-supervised learning method. Our results show comparable and in some cases exceeding performance with state-of-the-art coarse-to-fine event-based optical flow estimation.


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
