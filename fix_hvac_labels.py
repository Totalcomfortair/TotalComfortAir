from PIL import Image

paths = [
    'images/hvac-system.jpg',
    'images/technician.jpg'
]

for path in paths:
    img = Image.open(path).convert('RGBA')
    w, h = img.size
    sample = img.crop((0, max(120, h // 5), w, min(h, max(220, h // 2))))
    sample_pixels = list(sample.getdata())
    avg_r = sum(p[0] for p in sample_pixels) // len(sample_pixels)
    avg_g = sum(p[1] for p in sample_pixels) // len(sample_pixels)
    avg_b = sum(p[2] for p in sample_pixels) // len(sample_pixels)
    bg = (avg_r, avg_g, avg_b, 255)
    box = (0, 0, min(w, 520), min(h, 130))
    img.paste(bg, box)
    img.save(path)
    print(f'fixed {path}')
