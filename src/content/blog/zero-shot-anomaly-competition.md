---
title: "Notes from a zero-shot anomaly detection competition"
date: "2026-04-24"
description: "What actually moved the needle in the VAND4 zero-shot industrial track, and the things we tried that did not."
tags: ["competition", "anomaly detection", "foundation models"]
draft: false
---

We finished fifth in the zero-shot industrial track of VAND4. Since competition
write-ups tend to describe only the winning path, here is the fuller version,
including the branches that went nowhere.

## The constraint that shapes everything

Zero-shot means no anomalous examples — not few, none. You are given normal
reference images and asked to segment defects in unseen test images. Every
method therefore reduces to the same question: what does "different from normal"
mean in embedding space, and at what granularity do you measure it?

## What worked

**Patch-level embeddings from a frozen encoder.** Image-level features are far
too coarse; a scratch occupying two percent of a part barely perturbs a pooled
representation. Patch-level DINOv2 features kept the locality we needed without
any training.

**Mutual scoring rather than one-directional similarity.** Comparing a test
patch to its nearest normal reference patch produces a noisy map. Scoring in
both directions — how well does the reference explain the test patch, and how
well does the test patch explain the reference — suppressed a good share of the
false positives from benign texture variation.

**Segmentation as a post-processing prior.** Similarity maps are blobby and do
not respect object boundaries. Using SAM to snap high-scoring regions to
coherent masks improved our segmentation metrics far more than any further
tuning of the scoring function did.

## What did not work

- **Aggressive test-time augmentation.** Cost a great deal of inference time for
  a change well inside run-to-run noise.
- **Hand-tuned thresholds per category.** Fit the validation set, generalised
  poorly, and the tuning effort would have been better spent on the scoring
  function.
- **Larger encoders, uncritically.** More parameters did not reliably mean
  better patch representations for this task; the middle-sized encoder was
  competitive and considerably faster.

## The takeaway I am carrying forward

In the zero-shot setting, most of the achievable gain sat in *how comparisons
were made and cleaned up*, not in which backbone produced the features. That is
probably specific to the regime — with labelled anomalies I would expect the
balance to shift — but it was a useful correction to my instinct to reach for a
bigger model first.
