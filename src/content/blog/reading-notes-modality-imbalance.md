---
title: "Reading notes: why multimodal models quietly become unimodal"
date: "2026-06-18"
description: "Modality imbalance is usually framed as an optimisation problem. I think it's at least partly a features problem, and that distinction changes what you should actually do about it."
tags: ["multimodal", "reading notes", "representation learning"]
draft: false
---

Every survey of multimodal learning eventually arrives at the same uncomfortable
observation: a model given three modalities frequently learns to use one. Text
carries most of the signal in conversational benchmarks, so the audio and video
branches converge to something close to a constant, and the fusion layer learns
to ignore them.

## The usual framing

The standard account is an optimisation story. Modalities converge at different
rates, the fastest one reaches a good enough solution first, and the gradient
signal reaching the slower branches collapses before they've learned anything
useful. The remedies follow directly: per modality learning rates, gradient
modulation, auxiliary unimodal losses.

These help. They also assume the slow branches would have been useful if only
they had been given room to learn.

## The part I keep getting stuck on

For visual features in conversational emotion recognition, I'm not sure that
assumption holds. If the visual branch consumes low level descriptors extracted
from a handful of frames, the information it can contribute may genuinely be
close to zero, not suppressed, just absent. Rebalancing gradients toward a
branch that has nothing to say produces a well balanced model that is worse.

That suggests a different first question. Before asking how to force a model to
attend to a modality, ask whether the representation of that modality actually
encodes what the task needs:

- What is the visual channel *supposed* to contribute here? Expression, gaze,
  posture, and how each shifts across a turn.
- Do the extracted features represent any of that, or do they represent
  texture statistics that happen to correlate with it in the training set?

## Where this leaves me

The two views aren't in conflict, you can have both a starved branch and a
badly represented one, but they suggest different first moves. My current
working position is that representation quality should be ruled out before
optimisation tricks are reached for, because a balancing method applied to
uninformative features mostly buys you a more expensive model.

*These are working notes rather than settled conclusions. Corrections welcome.*
