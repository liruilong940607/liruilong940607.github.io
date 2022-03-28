import cv2
import os

for file in os.listdir("photos"):
    if not file[-4:] == ".JPG":
        continue
    fp = os.path.join("photos", file)
    img = cv2.imread(fp)
    scale = 800 / min(img.shape[0:2])
    cv2.imwrite(
        os.path.join("photos_large", file),
        cv2.resize(img, (0, 0), fx=scale, fy=scale)
    )
    center = (img.shape[0] / 2, img.shape[1] / 2)
    h = w = min(img.shape[0:2])
    x = center[1] - w / 2
    y = center[0] - h / 2

    cv2.imwrite(
        os.path.join("photos_small", file), 
        cv2.resize(img[int(y):int(y+h), int(x):int(x+w)], (200, 200))
    )
