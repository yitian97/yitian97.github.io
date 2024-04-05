---
title: "Egomotion from event-based SNN optical flow"
collection: publications
permalink: /publication/2023-08-egomotion-snn-2
excerpt: 'We present a method for computing egomotion using event cameras with a pre-trained optical flow spiking neural network (SNN). To address the aperture problem encountered in the sparse and noisy normal flow of the initial SNN layers, our method includes a sliding-window bin-based pooling layer that computes a fused full flow estimate. To add robustness to noisy flow estimates, instead of computing the egomotion from vector averages, our method optimizes the intersection of constraints. The method also includes a RANSAC step to robustly deal with outlier flow estimates in the pooling layer. We validate our approach on both simulated and real scenes and compare our results favorably to the state-of-the-art methods. However, our method may be sensitive to datasets and motion speeds different from those used for training, limiting its generalizability.
Results for translational motion on windmill dataset:
<img src="/files/trans.gif" width="960" height="231" /> 
Results for rotational motion on windmill dataset:
<img src="/files/rot.gif" width="960" height="231" />
Results for roational motion on natural scene dataset:
<img src="/files/naturalrot.gif" width="960" height="231" />'
date: 2023-08-01
venue: '2023 ACM International Conference on Neuromorphic Systems'
paperurl: 'http://www.iri.upc.edu/files/scidoc/2747-Egomotion-from-event-based-SNN-optical-flow.pdf'
citation: 'Y. Tian and J. Andrade-Cetto. Egomotion from event-based SNN optical flow, 2023 ACM International Conference on Neuromorphic Systems, 2023, Santa Fe, NM, USA, pp. 8:1-8.'
---


