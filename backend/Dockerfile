FROM python:3-alpine3.23

WORKDIR /app

# Install compiler toolchain and headers (Alpine uses apk)
RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make \
    libffi-dev \
    musl-dev \
    python3-dev

COPY requirements.txt .
RUN pip install --upgrade pip setuptools wheel
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py .

CMD ["gunicorn", "--bind", "0.0.0.0:5000", "--timeout", "120", "app:app"]
