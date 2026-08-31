"""Generate a placeholder resume PDF for Yashfa Waseem.

Replace public/Yashfa_Waseem_Resume.pdf with a full resume when ready.
"""

LINES = [
    ("F2", 22, 0.10, "YASHFA WASEEM"),
    ("F1", 11, 0.45, "Prompt Engineer  |  AI & LLM Developer  |  Data Analyst"),
    ("F1", 9.5, 0.40, "yashfawaseem2006@gmail.com   -   github.com/bint-e-waseem"),
    ("F1", 9.5, 0.40, "linkedin.com/in/yashfa-waseem-7653a6355   -   kaggle.com/yashfawaseem"),
    ("F2", 12, 0.15, "PROFILE"),
    ("F1", 10, 0.35, "Student and aspiring prompt engineer building practical AI solutions with"),
    ("F1", 10, 0.35, "LLMs, RAG pipelines, NLP, and data-driven workflows. Strategic learner who"),
    ("F1", 10, 0.35, "connects skills to solve real-world problems."),
    ("F2", 12, 0.15, "SKILLS"),
    ("F1", 10, 0.35, "Programming: Python, SQL, C++, OOP"),
    ("F1", 10, 0.35, "Data: Data Cleaning, Data Analysis, Pandas, NumPy, Matplotlib, Seaborn"),
    ("F1", 10, 0.35, "AI: NLP, LLMs, RAG, Fine-tuning, LangChain, Prompt Engineering, Scikit-Learn"),
    ("F1", 10, 0.35, "Tools: Git & GitHub, Jupyter Notebooks, VS Code, Kaggle"),
    ("F2", 12, 0.15, "EDUCATION"),
    ("F1", 10, 0.35, "IBIT - Student, building foundations toward Data Science & AI"),
    ("F1", 10, 0.35, "Currently learning: Deep Learning, Advanced Pandas, Scikit-Learn"),
    ("F2", 12, 0.15, "PROJECTS"),
    ("F1", 10, 0.35, "RAG Document Assistant - chat with documents using LangChain and an LLM"),
    ("F1", 10, 0.35, "Data Cleaning & Analysis Dashboard - clean, analyze, and visualize datasets"),
    ("F1", 10, 0.35, "NLP Text Classification - classify sentiment and categories from text"),
    ("F1", 10, 0.35, "Fine-Tuned LLM Assistant - domain-specific AI assistant"),
    ("F1", 10, 0.35, "More on GitHub: Resume_analysis, E-commerce RFM, Tech-Stack-Recommender,"),
    ("F1", 10, 0.35, "Pinecone vector DB tutorial, bank-system (C++ OOP), Smart-Password-Generator"),
    ("F1", 9, 0.55, "Placeholder resume - replace this file (public/Yashfa_Waseem_Resume.pdf)"),
    ("F1", 9, 0.55, "with your full resume whenever it is ready."),
]


def esc(text: str) -> str:
    return text.replace("\\", r"\\").replace("(", r"\(").replace(")", r"\)")


def build_stream() -> bytes:
    parts = ["BT"]
    x, y = 72, 756
    for font, size, gray, text in LINES:
        parts.append(f"/{font} {size} Tf")
        parts.append(f"{gray} g")
        parts.append(f"1 0 0 1 {x} {y} Tm")
        parts.append(f"({esc(text)}) Tj")
        y -= size + 9
    parts.append("ET")
    # divider line under the header
    parts.append("0.55 0.36 0.96 RG 1.2 w 72 736 m 540 736 l S")
    return "\n".join(parts).encode("latin-1")


def main() -> None:
    stream = build_stream()
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        (
            b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
            b"/Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /Contents 4 0 R >>"
        ),
        b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"\nendstream",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    ]

    out = bytearray(b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n")
    offsets = []
    for i, obj in enumerate(objects, start=1):
        offsets.append(len(out))
        out += f"{i} 0 obj\n".encode() + obj + b"\nendobj\n"

    xref_pos = len(out)
    out += f"xref\n0 {len(objects) + 1}\n".encode()
    out += b"0000000000 65535 f \n"
    for off in offsets:
        out += f"{off:010d} 00000 n \n".encode()
    out += (
        f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n"
    ).encode()

    with open("public/Yashfa_Waseem_Resume.pdf", "wb") as fh:
        fh.write(bytes(out))
    print("wrote public/Yashfa_Waseem_Resume.pdf", len(out), "bytes")


if __name__ == "__main__":
    main()
