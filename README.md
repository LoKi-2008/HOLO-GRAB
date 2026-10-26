# HOLO GRAB

Run from this folder with:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. Webcam access requires localhost or HTTPS. Allow camera access and press **Start camera**. The hand-tracking model downloads on first start.

Choose **Atom**, **Human Body**, **Car Engine**, **Gun**, **Plane**, **Nuclear Reactor**, or **Computer** from the large bottom dock. Click a tile or pinch it with your index finger; press **M** to cycle models. With one hand pinching, move up/down to reposition and swipe left/right to rotate the model upright around its vertical axis. Use both hands to zoom and reposition. Model selection plays a short spoken description using an available male-sounding system voice when possible. Use **VOICE: ON/OFF** to control narration. Press **H** to toggle the hand overlay and **D** for debug info. Drop a `.glb` file anywhere in the page to load it.
