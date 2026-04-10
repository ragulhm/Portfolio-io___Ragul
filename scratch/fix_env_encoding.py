import os

env_path = r'd:\Tech-stack\FastApi\Portfolio\astral-architect-io-main (1)\astral-architect-io-main\django_portfolio\.env'

# Read with fallback encodings
try:
    with open(env_path, 'r', encoding='utf-16') as f:
        content = f.read()
    print("Detected UTF-16")
except UnicodeDecodeError:
    with open(env_path, 'r', encoding='utf-8') as f:
        content = f.read()
    print("Detected UTF-8 (or other)")

# Force write as UTF-8 without BOM
with open(env_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("Successfully converted .env to UTF-8")
