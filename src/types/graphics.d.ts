declare type Rotation = 0 | 1 | 2 | 3;

declare module 'graphics' {
  type CustomFont = {
    bitmap: Uint8Array;
    glyphs: Uint8Array;
    width: number;
    height: number;
    first: number;
    last: number;
    advanceX: number;
    advanceY: number;
  };

  type Bitmap = {
    width: number;
    height: number;
    bpp?: number;
    data: Uint8Array | string;
  };

  /**
   * An instance of GraphicsContext provides basic graphic functions including
   * drawing shapes, fonts, images, and etc. All graphic functions depend on the
   * provided primitive drawing functions which draws directly to a graphic
   * device.
   */
  class GraphicsContext {
    /**
     * @param width Screen width of the graphic device in pixels
     * @param height Screen height of the graphic device in pixels
     * @param options.rotation Rotation of screen. One of `0` (0 degree), `1` (90
     * degree in clockwise), `2` (180 degree in clockwise), and `3` (270 degree
     * in clockwise).
     * @param options.setPixel A callback function to draw a pixel at `x`, `y`
     * with color `color`.
     */
    constructor(width: number, height: number, options?: {
      rotation?: Rotation;
      setPixel?: (x: number, y: number, color: number) => void;
      fillRect?: (x: number, y: number, w: number, h: number, color: number) => void;
    })

    /**
     * Returns screen width in pixels.
     * @returns Screen width of graphic device in pixels
     */
    getWidth(): number;

    /**
     * Return screen height in pixels.
     * @returns Screen height of graphic device in pixels
     */
    getHeight(): number;

    /**
     * Clear the screen buffer.
     */
    clearScreen(): void;

    /**
     * Return 16-bit color (5-bit for red, 6-bits for green, 5-bits for blue)
     * value from RGB values.
     * @param red Red brightness between 0~255
     * @param green Green brightness between 0~255
     * @param blue Blue brightness between 0~255
     * @returns 16-bit color value
     */
    color16(red: number, green: number, blue: number): number;

    /**
     * Fill the screen buffer with the color.
     * @param color Color value
     */
    fillScreen(color: number): void;

    /**
     * Set the rotation of screen.
     * @param rotation Rotation of screen
     */
    setRotation(rotation: Rotation): void;

    /**
     * Returns rotation of screen.
     * @returns Rotation of screen
     */
    getRotation(): Rotation;

    /**
     * Set pen color.
     * @param color Pen color
     */
    setColor(color: number): void;

    /**
     * Returns pen color.
     * @returns Pen color
     */
    getColor(): number;

    /**
     * Set fill color.
     * @param color Fill color
     */
    setFillColor(color: number): void;

    /**
     * Returns fill color.
     * @returns Fill color
     */
    getFillColor(): number;

    /**
     * Set font color.
     * @param color Font color
     */
    setFontColor(color: number): void;

    /**
     * Returns font color.
     * @returns Font color
     */
    getFontColor(): number;

    /**
     * Set a custom font. If you are interested in developing custom font, please
     * check the {@link: https://github.com/kaluma-project/kameleon-fontconv | font conversion tool}.
     * @param font Custom font object. If `null` passed, default font is used.
     */
    setFont(font: CustomFont): void;

    /**
     * Set font scale.
     * @param scaleX Horizontal scale of font
     * @param scaleY Vertical scale of font
     */
    setFontScale(scaleX: number, scaleY: number): void;

    /**
     * Draw a pixel at (x, y) coordinate.
     * @param x coordinate X
     * @param y coordinate Y
     * @param color Pixel color
     */
    setPixel(x: number, y: number, color: number): void;

    /**
     * Get pixel color at (x, y) coordinate.
     * @param x coordinate X
     * @param y coordinate Y
     * @returns Pixel color at (x, y) coordinate
     */
    getPixel(x: number, y: number): number;

    /**
     * Draw a line from (x0, y0) coordinate to (x1, y1) coordinate.
     * @param x0 coordinate X0
     * @param y0 coordinate Y0
     * @param x1 coordinate X1
     * @param y1 coordinate Y1
     */
    drawLine(x0: number, y0: number, x1: number, y1: number): void;

    /**
     * Draw a rectangle at (x, y) coordinate of `w` width and `h` height.
     * @param x coordinate X
     * @param y coordinate Y
     * @param w Width of rectangle
     * @param h Height of rectangle
     */
    drawRect(x: number, y: number, w: number, h: number): void;

    /**
     * Draw a filled rectangle at (x, y) coordinate of `w` width and `h` height.
     * @param x coordinate X
     * @param y coordinate Y
     * @param w Width of rectangle
     * @param h Height of rectangle
     */
    fillRect(x: number, y: number, w: number, h: number): void;

    /**
     * Draw a circle at (x, y) coordinate of `r` radius.
     * @param x coordinate X
     * @param y coordinate Y
     * @param r Radius of circle
     */
    drawCircle(x: number, y: number, r: number): void;

    /**
     * Draw a filled circle at (x, y) coordinate of `r` radius.
     * @param x coordinate X
     * @param y coordinate Y
     * @param r Radius of circle
     */
    fillCircle(x: number, y: number, r: number): void;

    /**
     * Draw a rounded rectangle at (x, y) coordinate of `w` width, `h` height
     * and `r` radius corner.
     * @param x coordinate X
     * @param y coordinate Y
     * @param w Width of rectangle
     * @param h Height of rectangle
     * @param r Radius of corner
     */
    drawRoundRect(x: number, y: number, w: number, h: number, r: number): void;

    /**
     * Draw a filled and rounded rectangle at (x, y) coordinate of `w` width, `h`
     * height and `r` radius corner.
     * @param x coordinate X
     * @param y coordinate Y
     * @param w Width of rectangle
     * @param h Height of rectangle
     * @param r Radius of corner
     */
    fillRoundRect(x: number, y: number, w: number, h: number, r: number): void;

    /**
     * Draw a text at (x, y) coordinate.
     * @param x coordinate X
     * @param y coordinate Y
     * @text Text string to draw
     */
    drawText(x: number, y: number, text: string): void;

    /**
     * Get text bound (width, height) of a given text string.
     * @param text Text to get text bound
     * @returns Text bound
     */
    measureText(text: string): { width: number; height: number; };

    /**
     * Draw a bitmap image at (x, y) coordinate. The bitmap is drawn with
     * current color in case of 1-bit bitmap.
     * @param x coordinate X
     * @param y coordinate Y
     * @param bitmap Bitmap image
     * @param options Bitmap drawing options
     */
    drawBitmap(x: number, y: number, bitmap: Bitmap, options?: {
      color?: number;
    }): void;
  }

  class BufferedGraphicsContext extends GraphicsContext {
    constructor(width: number, height: number, options?: {
      bpp?: 1 | 16;
      rotation?: Rotation;
      display?: (buffer: Uint8Array) => void;
    })
    display(): void;
  }
}
