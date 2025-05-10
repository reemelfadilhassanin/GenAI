# GenAI: Simple Content Generator using LangChain Expression Language (LCEL)

## 📌 Project Overview

**GenAI** is a simple, modular content generation system built with **LangChain.js** and **LangChain Expression Language (LCEL)**. It takes a user-provided topic or keywords and generates a structured piece of content—such as a blog post or article—by composing a sequence of language model prompts using LCEL’s `.pipe()` syntax.

### Flow Summary

- **User Input**: Provide a topic or keyword.
- **Process Flow**:
  - Generate a **headline**.
  - Generate an **introduction**.
  - Generate a **body paragraph**.
  - Generate a **conclusion**.
- **Output**: A cohesive, structured content piece.

---

## Project Structure

The project is divided into three phases:

1. **Input Phase** – Accept topic or keywords.
2. **Process Phase** – Run a chain of model prompts using `.pipe()` via `RunnableSequence`.
3. **Output Phase** – Print or return the final generated content.

---
