---
title: "Egomotion from event-based SNN optical flow"
short_title: "Egomotion from SNN Optical Flow"
collection: portfolio
date: 2023-08-01
description: 'A method for computing egomotion using event cameras with a pre-trained optical flow SNN. Our approach includes sliding-window pooling and RANSAC for robust flow estimation.'
excerpt: 'We present a method for computing egomotion using event cameras with a pre-trained optical flow spiking neural network (SNN). To address the aperture problem encountered in the sparse and noisy normal flow of the initial SNN layers, our method includes a sliding-window bin-based pooling layer that computes a fused full flow estimate. To add robustness to noisy flow estimates, instead of computing the egomotion from vector averages, our method optimizes the intersection of constraints. The method also includes a RANSAC step to robustly deal with outlier flow estimates in the pooling layer. We validate our approach on both simulated and real scenes and compare our results favorably to the state-of-the-art methods. However, our method may be sensitive to datasets and motion speeds different from those used for training, limiting its generalizability.


<img src="/files/egomotion.png" width="960" height="540" />


<img src="/files/naturalrot.gif" width="960" height="231" />'
header:
  teaser: /files/naturalrot.gif
skills:
  - Neuromorphic computing
  - Unsupervised learning
  - Robotics
  - Egomotion
  - RANSAC
  - C++
  - Cuda
link: https://www.iri.upc.edu/project/show/192
paperurl: http://www.iri.upc.edu/files/scidoc/2747-Egomotion-from-event-based-SNN-optical-flow.pdf
codeurl: 
---
