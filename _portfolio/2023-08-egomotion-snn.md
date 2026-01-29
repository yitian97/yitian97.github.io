---
title: "Egomotion from event-based SNN optical flow"
short_title: "Egomotion from SNN Optical Flow"
collection: portfolio
date: 2023-08-01
description: 'A method for computing egomotion using event cameras with a pre-trained optical flow SNN. Our approach includes sliding-window pooling and RANSAC for robust flow estimation.'
excerpt: 'I developed a method for computing egomotion using event cameras with a pre-trained optical flow spiking neural network (SNN). To address the aperture problem encountered in the sparse and noisy normal flow of the initial SNN layers, I designed and implemented a sliding-window bin-based pooling layer that computes a fused full flow estimate. To add robustness to noisy flow estimates, instead of computing the egomotion from vector averages, I developed an optimization approach based on the intersection of constraints. I also integrated a RANSAC step to robustly deal with outlier flow estimates in the pooling layer. I validated the approach on both simulated and real scenes and achieved results that compare favorably to state-of-the-art methods. The method may be sensitive to datasets and motion speeds different from those used for training, which is a limitation I identified during the evaluation.


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
