/// <reference path="./jscommon.d.ts" />
/**
 * Copyright (c) 2015-2019, MindFusion LLC - Bulgaria.
 *
 * This source code is provided to you as part of the MindFusion software components
 * package you have purchased. You may use the source code to trace and/or fix
 * problems or customize the library as needed for your application. To get permission
 * to use the source code in any other way, please contact us at support@mindfusion.eu.
 */
declare module "chart-library" { export = MindFusion.Charting; }
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    class AnimationTimer {
        constructor(callback: any, autoStart?: boolean);
        stop(): void;
        start(): void;
        repeat(): void;
    }
}
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    /**
    * @class Represents a dispatcher for an generic event.
    */
    interface IEventDispatcher<T extends EventArgs> {
        /**
        * Subcribes an event listener to this event.
        */
        addEventListener: (handler: (sender: any, args: T) => void) => void;
        /**
        * Removes an event listener from this event.
        */
        removeEventListener: (handler: (sender: any, args: T) => void) => void;
    }
    /**
    * @class Notifies clients that a property value has changed.
    */
    interface INotifyPropertyChanged {
        /**
         * Occurs when a property value changes.
         * @event INotifyPropertyChanged.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {INotifyPropertyChanged} sender
         * @property {PropertyChangedEventArgs} args
         */
        propertyChanged: PropertyChangedEventDispatcher;
    }
    /**
    * @class Notifies clients that a collection has changed.
    */
    interface INotifyCollectionChanged {
        /**
         * Occurs when a collection changes.
         * @event INotifyCollectionChanged.collectionChanged
         * @type {NotifyCollectionChangedEventDispatcher}
         * @property {INotifyCollectionChanged} sender
         * @property {NotifyCollectionChangedEventArgs} args
         */
        collectionChanged: NotifyCollectionChangedEventDispatcher;
    }
    /**
    * @class Notifies clients that a collection is changing.
    */
    interface INotifyCollectionChanging {
        /**
         * Occurs just before a collection changes.
         * @event INotifyCollectionChanging.collectionChanging
         * @type {NotifyCollectionChangingEventDispatcher}
         * @property {INotifyCollectionChanging} sender
         * @property {NotifyCollectionChangingEventArgs} args
         */
        collectionChanging: NotifyCollectionChangingEventDispatcher;
    }
    /**
    * @class Notifies clients that a property has changed.
    */
    interface INotifyPropertyValueChanged {
        /**
         * Occurs when a property changes.
         * @event INotifyPropertyValueChanged.collectionChanging
         * @type {EventDispatcher}
         * @property {INotifyPropertyValueChanged} sender
         * @property {PropertyEventArgs} args
         */
        propertyValueChanged: EventDispatcher<PropertyEventArgs>;
    }
}
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    /**
    * @class Represents a dispatcher for an event.
    */
    class EventDispatcher<T extends EventArgs> implements IEventDispatcher<EventArgs> {
        /**
        * Subcribes an event listener to this event.
        */
        addEventListener(handler: (sender: any, args: T) => void): void;
        /**
        * Removes an event listener from this event.
        */
        removeEventListener(handler: (sender: any, args: T) => void): void;
        /**
        * Raises this event.
        */
        raiseEvent(sender: any, args: T): void;
    }
    /**
    * @class Represents a dispatcher for PropertyChanged events.
    */
    class PropertyChangedEventDispatcher extends EventDispatcher<PropertyChangedEventArgs> {
    }
    /**
    * @class Represents a dispatcher for NotifyCollectionChanged events.
    */
    class NotifyCollectionChangedEventDispatcher extends EventDispatcher<NotifyCollectionChangedEventArgs> {
    }
    /**
    * @class Represents a dispatcher for NotifyCollectionChanging events.
    */
    class NotifyCollectionChangingEventDispatcher extends EventDispatcher<NotifyCollectionChangingEventArgs> {
    }
}
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    /**
    * Describes an action that triggered a INotifyCollectionChanged.collectionChanged event.
    * @enum
    * @name NotifyCollectionChangedAction
    * @param [Add] Item was added to the collection.
    * @param [Remove] One or more items were removed from the collection.
    * @param [Reset] he contents of the collection changed dramatically.
    */
    enum NotifyCollectionChangedAction {
        /**
        * Item was added to the collection.
        */
        Add = 0,
        /**
        * One or more items were removed from the collection.
        */
        Remove = 1,
        /**
        * The contents of the collection changed dramatically.
        */
        Reset = 2,
    }
    class EmptyEventArgs extends EventArgs {
        /** Initializes a new instance of the EmptyEventArgs class. */
        constructor();
    }
    class ElapsedEventArgs extends EventArgs {
        /** Initializes a new instance of the ElapsedEventArgs class. */
        constructor();
        signalTime: Date;
    }
    /**
    * @class Provides data for PropertyChanged events.
    */
    class PropertyChangedEventArgs extends EventArgs {
        /** Initializes a new instance of the PropertyChangedEventArgs class. */
        constructor(propertyName: string);
        /**
        * Gets the name of the property that changed.
        * @returns {string} The name of the property.
        */
        propertyName: string;
    }
    /**
    * @class Provides data for CollectionChanged events.
    */
    class NotifyCollectionChangedEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the NotifyCollectionChangedEventArgs class.
        * @param {NotifyCollectionChangedAction} action The action that caused the event.
        * @param {Array} [changes] The items affected by the change.
        * @param {Number} [index] The index where the change occurred.
        */
        constructor(action: NotifyCollectionChangedAction, changes?: Array<any>, index?: number);
        /**
        * Gets the action that caused the vent.
        * @returns {NotifyCollectionChangedAction} The action that caused the event.
        */
        action: NotifyCollectionChangedAction;
        /**
        * Gets a list of the items affected by a Remove action.
        * @returns {Array} The list of affected items.
        */
        oldItems: Array<any>;
        /**
        * Gets the list of new items involved in the change.
        * @returns {Array} The list of involed items.
        */
        newItems: Array<any>;
    }
    /**
    * @class Provides data for CollectionChanging events.
    */
    class NotifyCollectionChangingEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the NotifyCollectionChangingEventArgs class.
        * @param {NotifyCollectionChangedAction} action The action that caused the event.
        * @param {Array} [changes] The items affected by the change.
        * @param {Number} [index] The index where the change occurred.
        */
        constructor(action: NotifyCollectionChangedAction, changes?: Array<any>, index?: number);
        /**
        * Gets the action that caused the event.
        * @returns {NotifyCollectionChangedAction} The action that caused the event.
        */
        action: NotifyCollectionChangedAction;
        /**
        * Gets a list of the items affected by a Remove action.
        * @returns {Array} The list of affected items.
        */
        oldItems: Array<any>;
        /**
        * Gets the list of new items involved in the change.
        * @returns {Array} The list of involed items.
        */
        newItems: Array<any>;
        /**
        * Gets a value indicating whether to allow the current operation.
        * @returns {Boolean} true to cancel the operation; otherwise, false.
        */
        getCancel(): boolean;
        /**
        * Sets a value indicating whether to allow the current operation.
        * @param {Boolean} value true to cancel the operation; otherwise, false.
        */
        setCancel(value: boolean): void;
    }
    /**
    * @class Provides data for PropertyValueChanged events.
    */
    class PropertyEventArgs extends EventArgs {
        /**
        * Initlializes a new instance of the PropertyEventArgs class.
        * @param {String} propertyName The name of the property that changed.
        * @param {Object} oldValue The old value of the property.
        * @param {Object} newValue The new value of the property.
        */
        constructor(propertyName: string, oldValue: any, newValue: any);
        /**
        * Gets the name of the property that changed.
        */
        propertyName: string;
        /**
        * Gets the value of the property before the change.
        */
        oldValue: any;
        /**
        * Gets the current value of the property.
        */
        newValue: any;
    }
}
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    class Timer {
        constructor(callback: any, interval?: number, autoRepeat?: boolean);
        start(): void;
        stop(): void;
        interval: number;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Represents a brush.
    * @property {MindFusion.Charting.Drawing.Color} color Gets or sets the color of this Brush object.
    */
    class Brush {
        /**
         * Initializes a new instance of the Brush class.
         * @param {Color | string} color The color of this brush.
         */
        constructor(color: MindFusion.Charting.Drawing.Color | string);
        /**
         * Creates a copy of this brush.
         * @returns {MindFusion.Charting.Drawing.Brush} The copy of this brush.
         */
        clone(): MindFusion.Charting.Drawing.Brush;
        /**
         * Applies the brush properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D, bounds?: MindFusion.Drawing.Rect): void;
        /**
         * Returns a JSON object describing this brush.
         * @returns {Object} The object describing this brush.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toObject(): Object;
        /**
         * Returns a Brush from a JSON object or string describing this brush.
         * @returns {Brush} The brush object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): MindFusion.Charting.Drawing.Brush;
        /**
        * Determines whether the specified object is equal to this Brush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this Brush; otherwise, false.
        */
        equals(obj: any): boolean;
        /**
         * Gets the color of this brush.
         * @returns {MindFusion.Charting.Drawing.Color} The color of this brush.
         */
        /**
         * Sets the color of this brush.
         * @param {MindFusion.Charting.Drawing.Color} value The color of this brush.
         */
        color: MindFusion.Charting.Drawing.Color;
    }
    /**
    * @class Represents a linear gradient brush.
    * @property {MindFusion.Charting.Drawing.Color} startColor Gets or sets the start color of the gradient.
    * @property {MindFusion.Charting.Drawing.Color} endColor Gets or sets the end color of the gradient.
    * @property {Number} angle Gets or sets angle of gradient rotation.
    */
    class LinearGradientBrush extends Brush {
        /**
         * Initializes a new instance of the Brush class.
         * @param {Color | string} startColor The starting color of the gradient.
             * @param {Color | string} endColor The ending color of the gradient.
         * @param {Number} [angle] The angle of the gradient.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds of the gradient.
         */
        constructor(startColor: MindFusion.Charting.Drawing.Color | string, endColor: MindFusion.Charting.Drawing.Color | string, angle?: number, bounds?: MindFusion.Drawing.Rect);
        /**
         * Creates a copy of this brush.
         * @returns {LinearGradientBrush} The copy of this brush.
         */
        clone(): LinearGradientBrush;
        /**
         * Applies the brush properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         * @param {MindFusion.Drawing.Rect} bounds The bounds of the gradient.
         */
        apply(context: CanvasRenderingContext2D, bounds: MindFusion.Drawing.Rect): void;
        /**
         * Returns a JSON object describing this brush.
         * @returns {Object} The object describing this brush.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toObject(): Object;
        /**
         * Returns a LinearGradientBrush from a JSON object or string describing this brush.
         * @returns {LinearGradientBrush} The brush object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): MindFusion.Charting.Drawing.Brush;
        /**
        * Determines whether the specified object is equal to this LinearGradientBrush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this LinearGradientBrush; otherwise, false.
        */
        equals(obj: any): boolean;
        /**
         * Gets the starting color of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The starting color of the gradient.
         */
        /**
         * Sets the starting color of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The starting color of the gradient.
         */
        startColor: MindFusion.Charting.Drawing.Color;
        /**
         * Gets the ending color of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The ending color of the gradient.
         */
        /**
         * Sets the ending color of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The ending color of the gradient.
         */
        endColor: MindFusion.Charting.Drawing.Color;
        /**
         * Gets the angle of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The angle of the gradient.
         */
        /**
         * Sets the angle of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The angle of the gradient.
         */
        angle: number;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Represents a color.
    */
    class Color {
        /**
         * Initializes a new instance of the Color class.
         * @param {String} value A string representation of the color.
         */
        constructor(value: string);
        /**
         * Creates a Color instance from alpha, red, green and blue values.
         * @param {Number} alpha The alpha value.
         * @param {Number} red The red value.
         * @param {Number} green The green value.
         * @param {Number} blue The blue value.
         * @returns {MindFusion.Charting.Drawing.Color} The new Color instance.
         */
        static fromArgb(a: number, r: number, g: number, b: number): MindFusion.Charting.Drawing.Color;
        /**
         * Creates a Color instance from red, green and blue values.
         * @param {Number} red The red value.
         * @param {Number} green The green value.
         * @param {Number} blue The blue value.
         * @returns {MindFusion.Charting.Drawing.Color} The new Color instance.
         */
        static fromArgb(r: number, g: number, b: number): MindFusion.Charting.Drawing.Color;
        value: string;
        R: number;
        G: number;
        B: number;
        A: number;
        rgbValue: string;
        /**
         * The list of color names as defined by the CSS specification.
         */
        static knownColors: {
            AliceBlue: string;
            AntiqueWhite: string;
            Aqua: string;
            Aquamarine: string;
            Azure: string;
            Beige: string;
            Bisque: string;
            Black: string;
            BlanchedAlmond: string;
            Blue: string;
            BlueViolet: string;
            Brown: string;
            BurlyWood: string;
            CadetBlue: string;
            Chartreuse: string;
            Chocolate: string;
            Coral: string;
            CornflowerBlue: string;
            Cornsilk: string;
            Crimson: string;
            Cyan: string;
            DarkBlue: string;
            DarkCyan: string;
            DarkGoldenRod: string;
            DarkGray: string;
            DarkGrey: string;
            DarkGreen: string;
            DarkKhaki: string;
            DarkMagenta: string;
            DarkOliveGreen: string;
            DarkOrange: string;
            DarkOrchid: string;
            DarkRed: string;
            DarkSalmon: string;
            DarkSeaGreen: string;
            DarkSlateBlue: string;
            DarkSlateGray: string;
            DarkSlateGrey: string;
            DarkTurquoise: string;
            DarkViolet: string;
            DeepPink: string;
            DeepSkyBlue: string;
            DimGray: string;
            DimGrey: string;
            DodgerBlue: string;
            Feldspar: string;
            FireBrick: string;
            FloralWhite: string;
            ForestGreen: string;
            Fuchsia: string;
            Gainsboro: string;
            GhostWhite: string;
            Gold: string;
            GoldenRod: string;
            Gray: string;
            Grey: string;
            Green: string;
            GreenYellow: string;
            HoneyDew: string;
            HotPink: string;
            IndianRed: string;
            Indigo: string;
            Ivory: string;
            Khaki: string;
            Lavender: string;
            LavenderBlush: string;
            LawnGreen: string;
            LemonChiffon: string;
            LightBlue: string;
            LightCoral: string;
            LightCyan: string;
            LightGoldenRodYellow: string;
            LightGray: string;
            LightGrey: string;
            LightGreen: string;
            LightPink: string;
            LightSalmon: string;
            LightSeaGreen: string;
            LightSkyBlue: string;
            LightSlateBlue: string;
            LightSlateGray: string;
            LightSlateGrey: string;
            LightSteelBlue: string;
            lightyellow: string;
            Lime: string;
            LimeGreen: string;
            Linen: string;
            Magenta: string;
            Maroon: string;
            MediumAquaMarine: string;
            MediumBlue: string;
            MediumOrchid: string;
            MediumPurple: string;
            MediumSeaGreen: string;
            MediumSlateBlue: string;
            MediumSpringGreen: string;
            MediumTurquoise: string;
            MediumVioletRed: string;
            MidnightBlue: string;
            MintCream: string;
            MistyRose: string;
            Moccasin: string;
            NavajoWhite: string;
            Navy: string;
            OldLace: string;
            Olive: string;
            OliveDrab: string;
            Orange: string;
            OrangeRed: string;
            Orchid: string;
            PaleGoldenRod: string;
            PaleGreen: string;
            PaleTurquoise: string;
            PaleVioletRed: string;
            PapayaWhip: string;
            PeachPuff: string;
            Peru: string;
            Pink: string;
            Plum: string;
            PowderBlue: string;
            Purple: string;
            Red: string;
            RosyBrown: string;
            RoyalBlue: string;
            SaddleBrown: string;
            Salmon: string;
            SandyBrown: string;
            SeaGreen: string;
            SeaShell: string;
            Sienna: string;
            Silver: string;
            SkyBlue: string;
            SlateBlue: string;
            SlateGray: string;
            SlateGrey: string;
            Snow: string;
            SpringGreen: string;
            SteelBlue: string;
            Tan: string;
            Teal: string;
            Thistle: string;
            Tomato: string;
            Turquoise: string;
            Violet: string;
            VioletRed: string;
            Wheat: string;
            White: string;
            WhiteSmoke: string;
            Yellow: string;
            YellowGreen: string;
        };
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * Specifies the dash pattern of lines.
    * @enum
    * @name DashStyle
    * @param [Solid] Specifies a solid line.
    * @param [Dash] Specifies a line consisting of dashes.
    * @param [Dot] Specifies a line consisting of dots.
    * @param [DashDot] Specifies a dash-dot pattern.
    * @param [DashDotDot] Specifies a dash-dot-dot pattern.
    */
    enum DashStyle {
        Solid = 0,
        Dash = 1,
        Dot = 2,
        DashDot = 3,
        DashDotDot = 4,
        Custom = 5,
    }
    /**
    * Specifies font style attributes.
    * @enum
    * @name FontStyle
    * @param [Regular] Normal text.
    * @param [Bold] Bold text.
    * @param [Italic] Italic text.
    * @param [Underline] Underlined text.
    */
    enum FontStyle {
        Regular = 0,
        Bold = 1,
        Italic = 2,
        Underline = 4,
        Strikeout = 8,
    }
    /**
    * Specifies the alignment of a text string relative to its layout rectangle.
    * @enum
    * @name StringAlignment
    * @param [Near] The text is drawn in the near corner of the layout rectangle.
    * @param [Center] The text is drawn in the center of the layout rectangle.
    * @param [Far] The text is drawn in the far corner of the layout rectangle.le.
    */
    enum StringAlignment {
        Near = 0,
        Center = 1,
        Far = 2,
    }
    /**
    * Specifies the position and alignment of a picture in a node, or that of the background image.
    * @enum
    * @name ImageAlign
    * @param [Center] The image is centered in the node or diagram.
    * @param [Fit] The image is resized to fit the size of the object or  the component's client area.
    * @param [Stretch] The image is stretched to fill the object or the component's client area.
    * @param [Tile] The image is tiled to cover the node or the diagram.
    * @param [TopLeft] The image is aligned to the top left corner of the node or the diagram.
    * @param [BottomLeft] The image is aligned to the bottom left corner of the node or the diagram.
    * @param [TopRight] The image is aligned to the top right corner of the node or the diagram.
    * @param [BottomRight] The image is aligned to the bottom right corner of the node or the diagram.
    * @param [TopCenter] The image is centered horizontally and aligned to the top side.
    * @param [BottomCenter] The image is centered horizontally and aligned to the bottom side.
    * @param [MiddleLeft] The image is centered vertically and aligned to the left-hand side.
    * @param [MiddleRight] The image is centered vertically and aligned to the right-hand side.
    */
    enum ImageAlign {
        Center = 0,
        Fit = 1,
        Stretch = 2,
        Tile = 3,
        TopLeft = 4,
        BottomLeft = 5,
        TopRight = 6,
        BottomRight = 7,
        TopCenter = 8,
        BottomCenter = 9,
        MiddleLeft = 10,
        MiddleRight = 11,
    }
    /**
    * Specifies how to join consecutive line or curve segments in a figure.
    * @enum
    * @name LineJoin
    * @param [Miter] Produces a sharp corner or a clipped corner, depending on whether the length of the miter exceeds the miter limit.
    * @param [Bevel] Produces a diagonal corner.
    * @param [Round] Produces a smooth, circular arc between the lines.
    */
    enum LineJoin {
        Miter = 0,
        Bevel = 1,
        Round = 2,
    }
    /**
    * @class Encapsulates text layout information.
    * @property {MindFusion.Charting.Drawing.StringAlignment} alignment Gets or sets the horizontal alignment of the text.
    * @property {MindFusion.Charting.Drawing.StringAlignment} lineAlignment Gets or sets the vertical alignment of the text.
    */
    class StringFormat {
        /**
        * Initializes a new instance of the StringFormat class.
        */
        constructor();
        alignment: StringAlignment;
        lineAlignment: StringAlignment;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Represents a font.
    * @property {String} name Gets or sets the name of this Font.
    * @property {Number} size Gets or sets the size of this Font.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets the style of this Font.
    */
    class Font {
        /**
        * Initializes a new instance of the Font class with the specified attributes.
        * @param {String} name The font name.
        * @param {Number} size The font size.
        * @param {MindFusion.Charting.Drawing.FontStyle} [fontStyle] The FontStyle
        */
        constructor(name: string, size: number, fontStyle?: FontStyle);
        /**
         * Applies the font properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D, bounds?: MindFusion.Drawing.Rect): void;
        /**
         * Returns a string representation of this font.
         * @returns {String} The string representation of this font.
         */
        toString(): string;
        /**
         * Gets the name of this font.
         * @returns {String} The name of this font.
         */
        /**
         * Sets the name of this font.
         * @param {String} value The name of this font.
         */
        name: string;
        /**
         * Gets the size of this font.
         * @returns {Number} The size of this font.
         */
        /**
         * Sets the size of this font.
         * @param {Number} value The size of this font.
         */
        size: number;
        /**
         * Gets the style of this font.
         * @returns {MindFusion.Charting.Drawing.FontStyle} The style of this font.
         */
        /**
         * Sets the style of this font.
         * @param {MindFusion.Charting.Drawing.FontStyle} value The style of this font.
         */
        fontStyle: FontStyle;
        static defaultFont: Font;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Represents a pen.
    * @property {MindFusion.Charting.Drawing.Color} color Gets or sets the color of this Pen.
    * @property {Number} width Gets or sets the width of this Pen.
    * @property {MindFusion.Charting.Drawing.DashStyle} dashStyle Gets or sets the dash style of this Pen.
    */
    class Pen {
        /**
         * Initializes a new instance of the Pen class.
         * @param {Brush | Color | string} brush The color of this pen.
         * @param {Number} [width] The width of this pen.
         */
        constructor(brush: MindFusion.Charting.Drawing.Brush | Color | string, width?: number);
        /**
         * Applies the pen properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D): void;
        /**
         * Returns a string representation of this pen.
         * @returns {String} The string representation of this pen.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toString(): string;
        /**
         * Returns a Pen from a string describing this pen.
         * @returns {Pen} The pen object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): MindFusion.Charting.Drawing.Pen;
        /**
        * Determines whether the specified object is equal to this LinearGradientBrush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this LinearGradientBrush; otherwise, false.
        */
        equals(obj: any): boolean;
        /**
         * Gets the color of this pen.
         * @returns {MindFusion.Charting.Drawing.Color} The color of this pen.
         */
        /**
         * Sets the  color of this pen.
         * @param {MindFusion.Charting.Drawing.Color} value The color of this pen.
         */
        color: MindFusion.Charting.Drawing.Color;
        /**
         * Gets the width of this pen.
         * @returns {Number} The width of this pen.
         */
        /**
         * Sets the width of this pen.
         * @param {Number} value The width of this pen.
         */
        width: number;
        /**
         * Gets the dash style of this pen.
         * @returns {MindFusion.Charting.Drawing.DashStyle} The dash style of this pen.
         */
        /**
         * Sets the line join of this pen.
         * @param {MindFusion.Charting.Drawing.DashStyle} value The line join of this pen.
         */
        dashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets the line join of this pen.
         * @returns {MindFusion.Charting.Drawing.LineJoin} The line join of this pen.
         */
        /**
         * Sets the line join of this pen.
         * @param {MindFusion.Charting.Drawing.LineJoin} value The line join of this pen.
         */
        lineJoin: LineJoin;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    class Utils {
        static getCursorPos(e: any, element: HTMLElement): MindFusion.Drawing.Point;
        static getBounds(element: HTMLElement): MindFusion.Drawing.Rect;
        static getPageScroll(): {
            scrollLeft: number;
            scrollTop: number;
        };
        static cartesianToPolar(coordCenter: MindFusion.Drawing.Point, point: MindFusion.Drawing.Point): {
            a: number;
            r: number;
        };
        static polarToCartesian(coordCenter: MindFusion.Drawing.Point, a: number, r: number): MindFusion.Drawing.Point;
        static rad(degree: any): number;
        static getBoundingBox(points: MindFusion.Drawing.Point[]): MindFusion.Drawing.Rect;
        static formatString(value: string, params: string[]): string;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Contains helper functions for drawing on a Canvas element.
    * @property {CanvasRenderingContext2D} context Gets or sets the underlying CanvasRenderingContext2D drawing object.
    */
    class Graphics {
        /**
         * Initializes a new instance of the Graphics class.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        constructor(context: CanvasRenderingContext2D);
        /**
         * Clears the canvas.
         */
        clear(): void;
        /**
         * Starts a new figure.
         * @param {MindFusion.Charting.Drawing.Pen} [pen] The pen to stroke the figure with.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] The brush to fill the figure with.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds to which the brush should be applied.
         */
        beginFigure(pen?: MindFusion.Charting.Drawing.Pen, brush?: MindFusion.Charting.Drawing.Brush, bounds?: MindFusion.Drawing.Rect): void;
        /**
         * Closes the current figure.
         * @param {MindFusion.Charting.Drawing.Pen} [pen] The pen to stroke the figure with.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] The brush to fill the figure with.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds to which the brush should be applied.
         */
        closeFigure(pen?: MindFusion.Charting.Drawing.Pen, brush?: MindFusion.Charting.Drawing.Brush, bounds?: MindFusion.Drawing.Rect): void;
        /**
         * Draws a straight line.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the line with.
         * @param {MindFusion.Drawing.Point} point1 The starting point of the line.
         * @param {MindFusion.Drawing.Point} point2 The ending point of the line.
         */
        drawLine(pen: MindFusion.Charting.Drawing.Pen, point1: MindFusion.Drawing.Point, point2: MindFusion.Drawing.Point): any;
        /**
        * Draws a straight line.
        * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the line with.
        * @param {Number} x1 The X coordinate of the starting point of the line.
        * @param {Number} y1 The Y coordinate of the starting point of the line.
        * @param {Number} x2 The X coordinate of the ending point of the line.
        * @param {Number} y2 The Y coordinate of the ending point of the line.
        */
        drawLine(pen: MindFusion.Charting.Drawing.Pen, x1: number, y1: number, x2: number, y2: number): any;
        /**
         * Draws a series of straight lines.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the lines with.
         * @param {MindFusion.Drawing.Point[]} points The points of the lines to draw.
         */
        drawLines(pen: MindFusion.Charting.Drawing.Pen, points: MindFusion.Drawing.Point[]): void;
        /**
         * Draws a polygon.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the polygon with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the polygon.
         */
        drawPolygon(pen: MindFusion.Charting.Drawing.Pen, points: MindFusion.Drawing.Point[]): void;
        /**
         * Fills a polygon.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the polygon with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the polygon.
         */
        fillPolygon(brush: MindFusion.Charting.Drawing.Brush, points: MindFusion.Drawing.Point[]): void;
        /**
         * Draws a string.
         * @param {String} text The string to draw.
         * @param {MindFusion.Drawing.Font} font The font to use.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to use.
         * @param {Point|Rect} location The position at which to draw.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] The format to use.
         */
        drawString(text: string, font: Font, brush: MindFusion.Charting.Drawing.Brush, location: MindFusion.Drawing.Point | MindFusion.Drawing.Rect, format?: StringFormat): void;
        /**
        * Draws a spline curve.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the curve with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the curve.
        */
        drawCurve(pen: MindFusion.Charting.Drawing.Pen, points: MindFusion.Drawing.Point[]): void;
        /**
         * Draws a rectangle.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the rectangle with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle to draw.
         */
        drawRectangle(pen: MindFusion.Charting.Drawing.Pen, rect: MindFusion.Drawing.Rect): void;
        /**
         * Fills a rectangle.
         * @param {MindFusion.Charting.Drawing.Brush} brush The pen to fill the rectangle with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle to fill.
         */
        fillRectangle(brush: MindFusion.Charting.Drawing.Brush, rect: MindFusion.Drawing.Rect): void;
        /**
         * Draws an ellipse.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the ellipse with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle describing the ellipse.
         */
        drawEllipse(pen: MindFusion.Charting.Drawing.Pen, rect: MindFusion.Drawing.Rect): void;
        /**
         * Fills an ellipse.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the ellipse with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle describing the ellipse.
         */
        fillEllipse(brush: MindFusion.Charting.Drawing.Brush, rect: MindFusion.Drawing.Rect): void;
        /**
         * Draws a pie.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the pie with.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie should be a doughnut, otherwise false.
         */
        drawPie(pen: MindFusion.Charting.Drawing.Pen, rect: MindFusion.Drawing.Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): void;
        /**
         * Fills a pie.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the pie with.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie should be a doughnut, otherwise false.
         */
        fillPie(brush: MindFusion.Charting.Drawing.Brush, rect: MindFusion.Drawing.Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): void;
        /**
         * Draws an image.
         * @param {HTMLImageElement} image The image to draw.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the image.
         * @param {MindFusion.Charting.Drawing.ImageAlign} align The align to use.
         */
        drawImage(image: HTMLImageElement, rect: MindFusion.Drawing.Rect, align: ImageAlign): void;
        /**
         * Checks if the given point is within the bounds of the given polygon.
         * @param {MindFusion.Drawing.Point} point The point to check.
         * @param {MindFusion.Drawing.Point[]} poly The points describing the polygon.
         * @returns {boolean] True if the point lies within polygon bounds, otherwise false.
         */
        pointInPoly(point: MindFusion.Drawing.Point, poly: MindFusion.Drawing.Point[]): boolean;
        /**
         * Checks if the given point is within the bounds of the given pie.
         * @param {MindFusion.Drawing.Point} point The point to check.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie is a doughnut, otherwise false.
         * @returns {Boolean} True if the point lies within pie bounds, otherwise false.
         */
        pointInPie(point: MindFusion.Drawing.Point, rect: MindFusion.Drawing.Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): boolean;
        /**
         * Saves the current graphics state.
         */
        save(): void;
        /**
         * Restores to a previously saved graphics state.
         */
        restore(): void;
        /**
         * Sets the clip rectangle.
         * @param {MindFusion.Drawing.Rect} rect The clip rectangle
         */
        clip(rect: MindFusion.Drawing.Rect): void;
        /**
         * Sets a translate transform.
         * @param {Number} x The distance to translate along the x-axis.
         * @param {Number} y The distance to translate along the y-axis.
         */
        translate(x: number, y: number): void;
        /**
         * Sets a transform.
         * @param {MindFusion.Drawing.Matrix} transform The transform matrix.
         */
        setTransform(transform: MindFusion.Drawing.Matrix): void;
        /**
         * Gets the size of the specified string.
         * @param {String} text The string to measure.
         * @param {MindFusion.Drawing.Font} font The font to use.
         * @param {Number} [width] The maximum width.
         * @returns {MindFusion.Drawing.Size} The size of the given string when drawn with the given font.
         */
        measureString(text: string, font: Font, width?: number): MindFusion.Drawing.Size;
        /**
         * Gets the underlying CanvasRenderingContext2D object.
         * @returns {CanvasRenderingContext2D} The underlying CanvasRenderingContext2D object.
         */
        /**
         * Sets the underlying CanvasRenderingContext2D object.
         * @param {CanvasRenderingContext2D} value The underlying CanvasRenderingContext2D object.
         */
        context: CanvasRenderingContext2D;
    }
}
/**
* @namespace MindFusion.Charting.Collections
*/
declare namespace MindFusion.Charting.Collections {
    /**
     * @class Represents an array of arbitrary objects.
     */
    class IEnumerable<T> {
        /**
         * Initializes a new instance of the IEnumerable class.
         * @param {Array<T>} [items] The underlying array data structure of the collection.
         */
        constructor(items?: Array<T>);
        /**
         * Gets the collection as an array.
        * @returns {Array<T>} The underlying array data structure of the collection.
        */
        items(): T[];
        /**
        * Gets the collection as an array in reverse order.
        * @returns {Array<T>} The underlying array data structure of the collection in reverse order.
        */
        reverse(): T[];
        /**
        * Gets the element at the given index.
        * @param {Number} index The index.
        * @returns {T} The element at the given index.
        */
        item(index: number): T;
        /**
        * Gets the number of elements.
        * @returns {Number} The number of elements.
        */
        count(): number;
        /**
        * Checks if the given element is present in the collection.
        * @param {T} item The object to check for.
        * @returns {Boolean} True if the element is found, otherwise false.
        */
        contains(item: T): boolean;
        /**
        * Adds an object to the end of the collection.
        * @param {T} item The object to add.
        */
        add(item: T): void;
        /**
        * Removes an element from the collection.
        * @param {T} item The object to remove.
        */
        remove(item: any): void;
        /**
        * Removes a range of elements starting from the given index.
        * @param {Number} index The starting index of the range.
        * @param {Number} count The length of the range.
        */
        removeRange(index: number, count: number): Array<T>;
        /**
        * Removes the element at the given index.
        * @param {Number} index The index.
        */
        removeAt(itemIndex: number): void;
        /**
        * Clears the collection.
        */
        clear(): void;
        /**
        * Creates a copy of the collection.
        * @returns {IEnumerable<T>} A copy of this collection.
        */
        clone(): MindFusion.Charting.Collections.IEnumerable<T>;
        /**
        * Copies a range of elements from this collection to a destination collection.
        * @param {IEnumerable<T>} destination The destination collection.
        * @param {Number} length The length of the range to copy.
        * @param {Number} [sourceIndex] The starting index of the range to copy.
        * @param {Number} [destinationIndex] The index at which the range should be copied.
        */
        copyTo(destination: MindFusion.Charting.Collections.IEnumerable<T>, length: number, sourceIndex?: number, destinationIndex?: number): void;
        /**
        * Sorts the underlying array.
        * @param {Function} [compareFn] The comparing function.
        */
        sort(compareFn?: (a: T, b: T) => number): void;
        /**
        * Gets the index of a given object in a collection.
        * @param {T} obj The object to look for.
        * @param {Number} [fromIndex] The starting index to search from.
        * @returns {Number} The index of the object, or -1 if the object is not present in the collection.
        */
        indexOfItem(obj: T, fromIndex?: number): number;
        /**
        * Adds an element to the collection at the specified index.
        * @param {Number} index The index.
        * @param {T} item The object to add.
        */
        insert(index: number, item: T): void;
        /**
        * Returns a new Object array, containing the contents of the collection.
        * @returns {Array<T>} The array.
        */
        toArray(): Array<T>;
        /**
        * Invokes a transform function on each item and returns the
        * maximum value in a sequence of numbers.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The maximum number in the sequence.
        */
        max(selector: (item: T) => number): number;
        /**
        * Invokes a transform function on each item and returns the
        * minimum value in a sequence of numbers.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The minimum number in the sequence.
        */
        min(selector: (item: T) => number): number;
        /**
        * Computes the sum of the sequence of number values that are
        * obtained by invoking a transform function on each element.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The sum of the number values in the sequence.
        */
        sum(selector: (item: T) => number): number;
        /**
        * Projects each element of a sequence into a new form.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {IEnumerable<T>} An collection whose elements are the result
        * of invoking the transform function on each element.
        */
        select(selector: (item: T) => any): MindFusion.Charting.Collections.IEnumerable<T>;
    }
    /**
     * @class Represents an array of arbitrary objects.
     */
    class List<T> extends IEnumerable<T> {
        /**
         * Initializes a new instance of the List class.
         * @param {Array<T>} [items] The underlying array data structure of the list.
         */
        constructor(items?: Array<T>);
    }
    /**
     * @class Represents a collection of keys and values.
     */
    class Dictionary<TKey, TValue> {
        /**
         * Initializes a new instance of the Dictionary class.
         */
        constructor();
        /**
        * Associates the specified value with the specified key within the dictionary.
        * @param {TKey} key The key to associate the value with.
        * @param {TValue} value The value to associate.
        */
        set(key: TKey, value: TValue): void;
        /**
        * Gets the value associated with the specified key within the dictionary.
        * @param {TKey} key The key whose value to get.
        */
        get(key: TKey): TValue;
        /**
        * Determines whether the dictionary contains a specific key.
        * @param {TKey} key The key to locate in the dictionary.
        * @returns {Boolean} true if the element exists in the collection, otherwise false.
        */
        contains(key: TKey): boolean;
        /**
        * Removes the element with the specified key from the dictionary.
        * @param {TKey} key The key of the element to remove.
        */
        remove(key: any): void;
        /** Gets the number of key/value pairs contained in the dictionary */
        count: number;
        /** Gets an array with all keys in the dictionary. */
        keys: MindFusion.Charting.Collections.List<TKey>;
        /** Gets an array with all values in the dictionary. */
        values: MindFusion.Charting.Collections.List<TValue>;
    }
    /**
     * @class Represents a collection of arbitrary objects.
     */
    class ObservableCollection<T> extends List<T> implements MindFusion.Charting.Common.INotifyPropertyChanged, MindFusion.Charting.Common.INotifyCollectionChanged, MindFusion.Charting.Common.INotifyCollectionChanging {
        /**
         * Initializes a new instance of the ObservableCollection class.
         * @param {Array<T>} [items] The underlying array data structure of the collection.
         */
        constructor(items?: Array<T>);
        /**
        * Raises the collectionChanged event.
        * @param {NotifyCollectionChangedEventArgs} args An instance of the NotifyCollectionChangedEventArgs class.
        */
        protected onCollectionChanged(args: MindFusion.Charting.Common.NotifyCollectionChangedEventArgs): void;
        /**
         * Occurs when a collection changes.
         * @event ObservableCollection<T>.collectionChanged
         * @type {NotifyCollectionChangedEventDispatcher}
         * @property {ObservableCollection<T>} sender
         * @property {NotifyCollectionChangedEventArgs} args
         */
        collectionChanged: MindFusion.Charting.Common.NotifyCollectionChangedEventDispatcher;
        /**
        * Raises the propertyChanged event.
        * @param {PropertyChangedEventArgs} args An instance of the PropertyChangedEventArgs class.
        */
        protected onPropertyChanged(args: MindFusion.Charting.Common.PropertyChangedEventArgs): void;
        /**
         * Occurs when a property value changes.
         * @event ObservableCollection<T>.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {ObservableCollection<T>} sender
         * @property {PropertyChangedEventArgs} args
         */
        propertyChanged: MindFusion.Charting.Common.PropertyChangedEventDispatcher;
        /**
        * Raises the collectionChanging validation event.
        * @param {NotifyCollectionChangingEventArgs} args An instance of the NotifyCollectionChangingEventArgs class.
        */
        protected onCollectionChanging(args: MindFusion.Charting.Common.NotifyCollectionChangingEventArgs): boolean;
        /**
         * Occurs just before an item is added, removed, changed, moved, or the entire list is refreshed.
         * @event ObservableCollection<T>collectionChanging
         * @type {NotifyCollectionChangingEventDispatcher}
         * @property {ObservableCollection<T>} sender
         * @property {NotifyCollectionChangingEventArgs} args
         */
        collectionChanging: MindFusion.Charting.Common.NotifyCollectionChangingEventDispatcher;
        /**
         * Adds an object to the collection.
         * @param {T} item The item to add.
         */
        add(item: T): void;
        /**
         * Deletes an object from the collection
         * @param {T} item The item to remove.
         */
        remove(item: T): void;
        /**
         * Deletes a range of elements from the collection
         * @param {Number} index The starting index of the range to remove.
         * @param {Number} count The length of the range to remove.
         */
        removeRange(index: number, count: number): Array<T>;
        /**
         * Delete the element at the specified index.
         * @param {Number} itemIndex The index to remove at.
         */
        removeAt(itemIndex: number): void;
        /**
         * Clears the collection
         */
        clear(): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    interface AutoSize {
        measuredSize(): number;
        relativeSize(): boolean;
        setPos(value: number): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Contains arguments passed to the CustomDraw event of buttons.
    * @property {MindFusion.Charting.Drawing.Graphics} graphics Gets the Graphics surface where the event handler should draw.
    * @property {MindFusion.Drawing.Rect} clipBounds Gets the current clip rectangle.
     */
    class ButtonDrawEventArgs extends EventArgs {
        constructor(graphics: MindFusion.Charting.Drawing.Graphics, clipBounds: MindFusion.Drawing.Rect);
        /**
         * Gets the Graphics surface where the event handler should draw.
         */
        /**
         * Gets the Graphics surface where the event handler should draw.
         */
        graphics: MindFusion.Charting.Drawing.Graphics;
        /**
         * Gets the current clip rectangle.
         */
        /**
         * Gets the current clip rectangle.
         */
        clipBounds: MindFusion.Drawing.Rect;
    }
    /**
    * @class Represents a dispatcher for ButtonDraw events.
    */
    class ButtonDrawEventDispatcher extends MindFusion.Charting.Common.EventDispatcher<ButtonDrawEventArgs> {
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a user interface component.
    * @property {Number} desiredWidth Gets a nullable number value specifying the component's desired width. Valid only after calling measure.
    * @property {Number} desiredHeight Gets a nullable number value specifying the component's desired height. Valid only after calling measure.
    * @property {Number} actualWidth Gets a number value specifying the component's assigned width. Valid only after calling arrange.
    * @property {Number} actualHeight Gets a number value specifying the component's assigned height. Valid only after calling arrange.
    * @property {Number} xInParent Gets a number value specifying the component's horizontal position relative to its parent.
    * @property {Number} yInParent Gets a number value specifying the component's vertical position relative to its parent.
    * @property {Number} rectInParent Gets the boundaries of this component relative to its parent.
    * @property {Number} gridRow Gets or sets the row index of this component when placed inside a GridPanel.
    * @property {Number} gridColumn Gets or sets the column index of this component when placed inside a GridPanel.
    * @property {LayoutAlignment} horizontalAlignment Gets or sets the horizontal alignment of this component inside the layout rectangle allocated by its parent panel.
    * @property {LayoutAlignment} verticalAlignment Gets or sets the vertical alignment of this component inside the layout rectangle allocated by its parent panel.
    * @property {Margins} margin Gets the margin space around this component relative to the layout rectangle allocated by its parent panel.
    * @property {Visibility} visibility Gets or sets the visibility of this component.
    * @property {HitTestVisibility} hitTestVisibility Gets or sets the hit-test visibility of this component.
    * @property {String} toolTip Gets or sets the component's tooltip text.
    * @property {Number} width Gets or sets a fixed width for this component.
    * @property {Number} height Gets or sets a fixed height for this component.
    */
    abstract class Component {
        /**
         * Initializes a new instance of the Component class.
         */
        constructor();
        /**
         * Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Arranges a child component in specified layout rectangle.
         * @param {Component} child A Component instance specifying the child to arrange.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {Number} x Layout rectangle's horizontal position.
         * @param {Number} y Layout rectangle's vertical position.
         * @param {Number} w Layout rectangle's width.
         * @param {Number} h Layout rectangle's height.
         */
        arrangeInRect(child: Component, context: RenderContext, x: number, y: number, w: number, h: number): void;
        /**
         * Returns a ComponentController used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of a ComponentController -derived class.
         */
        createController(context: RenderContext): ComponentController;
        /**
         * Invoked while the mouse is moved to let your application set the mouse cursor.
         * @param {Number} x A double value specifying the horizontal position of mouse pointer.
         * @param {Number} y A double value specifying the vertical position of mouse pointer.
         * @returns {CursorHint} A member of the CursorHint enumeration.
         */
        getCursorHint(x: number, y: number): CursorHint;
        /**
         * Sums specified nullable number values.
         * @param {Number} value1 The first term to sum.
         * @param {Number} value2 The second term to sum.
         * @returns {Number} A nullable number value representing the sum.
         */
        add(value1?: number, value2?: number): number;
        /**
         * Returns the larger of specified values.
         * @param {Number} value1 The first value to compare.
         * @param {Number} value2 The second value to compare.
         * @returns {Number} A nullable number value representing the larger value.
         */
        max(value1?: number, value2?: number): number;
        /**
         * Implements the visitor design pattern.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: ComponentVisitor): void;
        /**
         * Returns the component containing specified point.
         * @param {Number} x X coordinate of the point to test.
         * @param {Number} y Y coordinate of the point to test.
         * @returns {Component} A Component instance if one contains the point, or null otherwise.
         */
        hitTest(x: number, y: number): Component;
        localToParent(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        parentToLocal(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        /**
         * Transforms the specified point to the coordinate system of the root panel.
         * @param {MindFusion.Drawing.Point} point A Point instance containing coordinates local to this component.
         * @returns {MindFusion.Drawing.Point} A Point instance containing coordinates relative to the root panel.
         */
        localToRoot(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        /**
         * Transforms the specified point to the coordinate system of this component.
         * @param {MindFusion.Drawing.Point} point A Point instance containing coordinates relative to the root panel.
         * @returns {MindFusion.Drawing.Point} A Point instance containing coordinates local to this component.
         */
        rootToLocal(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        /**
         * Invalidates the current layout and runs a new layout pass before next draw operation.
         */
        invalidateLayout(): void;
        /**
         * Invalidates the appearance of this component and calls its Draw method at next draw operation.
         * @param {MindFusion.Drawing.Rect} [rect] A RectD instance specifying the invalid rectangle.
         */
        invalidate(rect?: MindFusion.Drawing.Rect): void;
        /**
         * Gets a nullable number value specifying the component's desired width. Valid only after calling Measure.
         */
        /**
         * Sets a nullable number value specifying the component's desired width. Valid only after calling Measure.
         */
        desiredWidth: number;
        /**
         * Gets a nullable number value specifying the component's desired height. Valid only after calling Measure.
         */
        /**
         * Sets a nullable number value specifying the component's desired height. Valid only after calling Measure.
         */
        desiredHeight: number;
        /**
         * TGets a number value specifying the component's assigned width. Valid only after calling Arrange.
         */
        /**
         * Sets a number value specifying the component's assigned width. Valid only after calling Arrange.
         */
        actualWidth: number;
        /**
         * Gets a number value specifying the component's assigned height. Valid only after calling Arrange.
         */
        /**
         * Sets a number value specifying the component's assigned height. Valid only after calling Arrange.
         */
        actualHeight: number;
        /**
         * Gets a number value specifying the component's horizontal position relative to its parent.
         */
        /**
         * Sets a number value specifying the component's horizontal position relative to its parent.
         */
        xInParent: number;
        /**
         * A number value specifying the component's vertical position relative to its parent.
         */
        /**
         * A number value specifying the component's vertical position relative to its parent.
         */
        yInParent: number;
        /**
         * Gets the boundaries of this component relative to its parent.
         */
        rectInParent: MindFusion.Drawing.Rect;
        /**
         * Gets or sets the row index of this component when placed inside a GridPanel.
         */
        /**
         * Gets or sets the row index of this component when placed inside a GridPanel.
         */
        gridRow: number;
        /**
         * Gets or sets the column index of this component when placed inside a GridPanel.
         */
        /**
         * Gets or sets the column index of this component when placed inside a GridPanel.
         */
        gridColumn: number;
        parent: Component;
        /**
         * Gets the horizontal alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        /**
         * Sets the horizontal alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        horizontalAlignment: LayoutAlignment;
        /**
         * Gets the vertical alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        /**
         * Sets the vertical alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        verticalAlignment: LayoutAlignment;
        /**
         * Gets the margin space around this component relative to the
         * layout rectangle allocated by its parent panel.
         */
        /**
         * Sets the margin space around this component relative to the
         * layout rectangle allocated by its parent panel.
         */
        margin: Margins;
        /**
         * Gets the visibility of this component.
         */
        /**
         * Sets the visibility of this component.
         */
        visibility: Visibility;
        /**
         * Gets the hit-test visibility of this component.
         */
        /**
         * Sets the hit-test visibility of this component.
         */
        hitTestVisibility: HitTestVisibility;
        /**
         * Gets the component's tooltip text.
         */
        /**
         * Sets the component's tooltip text.
         */
        toolTip: string;
        /**
         * Gets a fixed width for this component.
         */
        /**
         * Sets a fixed width for this component.
         */
        width: number;
        /**
         * Gets or sets a fixed height for this component.
         */
        /**
         * Gets or sets a fixed height for this component.
         */
        height: number;
        desiredWidthMargins(): number;
        desiredHeightMargins(): number;
        effectiveMeasuredWidth(): number;
        effectiveMeasuredHeight(): number;
        m_id: number;
        id(): number;
        fromJson(obj: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Represents an animation.
     */
    interface ComponentAnimation {
        /**
         * Stops this animation.
         */
        stop(): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Defines the interface that controller classes should implement
     * to get user input from the Dashboard control.
     */
    interface ComponentController {
        /**
         * Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
         * Called when the user scrolls with the middle mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
         */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Draws a representation of the current state of user interaction on specified Graphics surface.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics A Graphics instance.
         */
        drawInteraction(graphics: MindFusion.Charting.Drawing.Graphics): void;
        /**
         * Invoked while the mouse is moved to let your application set the mouse cursor.
         * @param {Number} x A double value specifying the horizontal position of mouse pointer.
         * @param {Number} y A double value specifying the vertical position of mouse pointer.
         * @returns {CursorHint} A member of the CursorHint enumeration.
         */
        getCursorHint(x: number, y: number): CursorHint;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): ComponentAnimation;
        /**
         * Gets the component modified by this ComponentController.
         */
        component: Component;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Defines the base visitor class for hierarchy of Component objects.
     */
    class ComponentVisitor {
        /**
         * Visits a Panel component.
         * @param panel A Panel instance.
         */
        visitPanel(panel: Panel): void;
        /**
         * Visits a Plot component.
         * @param {Plot} plot A Plot instance.
         */
        visitPlot(plot: MindFusion.Charting.Plot): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Specifies what mouse cursor to display while a user interacts with the control.
    * @enum
    * @name CursorHint
    * @param [Move] Indicates the cursor specified by the MoveCursor property.
    * @param [Rotate] Indicates the cursor specified by the RotateCursor property.
    * @param [HorizontalResize] Indicates the cursor specified by the HorizontalResizeCursor property.
    * @param [VerticalResize] Indicates the cursor specified by the VerticalResize property.
    * @param [DiagonalResize] Indicates the cursor specified by the DiagonalResize property.
    * @param [CounterDiagonalResize] Indicates the cursor specified by the CounterDiagonalResize property.
    * @param [Pointer] Indicates the cursor specified by the PointerCursor property.
    * @param [Disallow] Indicates the cursor specified by the DisallowCursor property.
    * @param [DontChange] Indicates the cursor specified by the Cursor property.
    */
    enum CursorHint {
        /**
         * Indicates the cursor specified by the MoveCursor property.
         */
        Move,
        /**
         * Indicates the cursor specified by the RotateCursor property.
         */
        Rotate,
        /**
        * Indicates the cursor specified by the HorizontalResizeCursor property.
        */
        HorizontalResize,
        /**
         * Indicates the cursor specified by the VerticalResizeCursor property.
         */
        VerticalResize,
        /**
        * Indicates the cursor specified by the DiagonalResizeCursor property.
        */
        DiagonalResize,
        /**
         * Indicates the cursor specified by the CounterDiagonalResizeCursor property.
         */
        CounterDiagonalResize,
        /**
        * Indicates the cursor specified by the PointerCursor property.
        */
        Pointer,
        /**
         * Indicates the cursor specified by the DisallowCursor property.
         */
        NotAllowed,
        /**
        * Indicates the cursor specified by the Cursor property.
        */
        DontChange,
        /**
        * Indicates the default browser cursor
        */
        Default,
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Identifies hit-test visibility of a component.
    * @enum
    * @name HitTestVisibility
    * @param [HitTestVisibility] Do not participate in hit-testing.
    * @param [Children] Only hit-test child components.
    * @param [SelfAndChildren] Hit-test this component and its children.
    */
    enum HitTestVisibility {
        /**
         * Do not participate in hit-testing.
         */
        Hidden = 0,
        /**
         * Only hit-test child components.
         */
        Children = 1,
        /**
         * Hit-test this component and its children.
         */
        SelfAndChildren = 2,
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Indicates how child components are aligned within the layout rectangle
    * allocated to them by their parent component.
    * @enum
    * @name LayoutAlignment
    * @param [Near] Align the child component to the left or top side.
    * @param [Center] Center the child component.
    * @param [Far] Align the child component to the right or bottom side.
    * @param [Stretch] Stretch the child component.
    */
    enum LayoutAlignment {
        /**
         * Align the child component to the left or top side.
         */
        Near = 0,
        /**
         * Center the child component.
         */
        Center = 1,
        /**
         * Align the child component to the right or bottom side.
         */
        Far = 2,
        /**
         * Stretch the child component.
         */
        Stretch = 3,
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Indicates how GridPanel determines dimensions of its rows and columns.
    * @enum
    * @name LengthType
    * @param [Auto] The row or column is auto-sized to fit its child components.
    * @param [Relative] The size of relative elements is calculated from available space in the GridPanel proportionally to the number of other relative elements.
    */
    enum LengthType {
        /**
        * The row or column is auto-sized to fit its child components.
        */
        Auto = 0,
        /**
        * The size of relative elements is calculated from available space in the GridPanel
        * proportionally to the number of other relative elements.
        */
        Relative = 1,
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Identifies layout orientation.
    * @enum
    * @name Orientation
    * @param [Horizontal] Horizontal orientation.
    * @param [Vertical] Vertical orientation.
    */
    enum Orientation {
        /**
         * Horizontal orientation.
         */
        Horizontal = 0,
        /**
         * Vertical orientation.
         */
        Vertical = 1,
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a control that handles zooming and scrolling of axes.
    * @property {Axis} axis Gets or sets the Axis that will be handled by this component.
    * @property {Number} minValue Gets or sets the smallest value of the displayed range.
    * @property {Number} maxValue Gets or sets the largest value of the displayed range.
    * @property {Number} size Gets or sets the width or height of the component.
    * @property {Number} handleSize Gets or sets the width or height of resize handles.
    * @property {Brush} brush Gets or sets the Brush used to paint the component's background.
    * @property {Brush} thumbBrush Gets or sets the Brush used to paint the thumb.
    * @property {Brush} handleBrush Gets or sets the Brush used to paint resize handles.
    * @property {Orientation} orientation Gets or sets the orientation of the component.
    * @property {SeriesContainer} axesSource Gets or sets the object whose Axes will be handled by this component.
    */
    class RangeSelector extends Component {
        /**
         * Initializes a new instance of the RangeSelector class.
         */
        constructor(axis: Axis, minValue: number, maxValue: number);
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        getCursorHint(x: number, y: number): CursorHint;
        getZoomMode(x: number, y: number): MindFusion.Charting.Drawing.StringAlignment;
        /**
         * Component.CreateController override. Returns a controller used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of a ComponentController -derived class.
         */
        createController(context: RenderContext): ComponentController;
        effectiveMinValue: number;
        effectiveMaxValue: number;
        /**
        * Gets the object whose Axes will be handled by this component.
        */
        /**
         * Gets the object whose Axes will be handled by this component.
         */
        axesSource: SeriesContainer;
        /**
         * Gets the Axis that will be handled by this component.
         */
        /**
         * Sets the Axis that will be handled by this component.
         */
        axis: Axis;
        /**
         * Gets the orientation of the component.
         */
        /**
         * Sets the orientation of the component.
         */
        orientation: Orientation;
        /**
         * Gets the smallest value of the displayed range.
         */
        /**
         * Sets the smallest value of the displayed range.
         */
        minValue: number;
        /**
         * Gets the largest value of the displayed range.
         */
        /**
         * Sets the largest value of the displayed range.
         */
        maxValue: number;
        /**
         * Gets the width or height of the component.
         */
        /**
         * Sets the width or height of the component.
         */
        size: number;
        /**
         * Gets the width or height of resize handles.
         */
        /**
         * Sets the width or height of resize handles.
         */
        handleSize: number;
        /**
         * Gets the Brush used to paint the component's background.
         */
        /**
         * Sets the Brush used to paint the component's background.
         */
        brush: MindFusion.Charting.Drawing.Brush;
        /**
        * Gets the Brush used to paint the thumb.
        */
        /**
         * Sets the Brush used to paint the thumb.
         */
        thumbBrush: MindFusion.Charting.Drawing.Brush;
        /**
        * Gets the Brush used to paint the resize handles.
        */
        /**
         * Sets the Brush used to paint the resize handles.
         */
        handleBrush: MindFusion.Charting.Drawing.Brush;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Interface used to communicate with host DOM element.
     */
    interface RootControl {
        /**
         * Invalidates the specified region of a component.
         * @param rect The area to invalidate and redraw.
         * @param panel The reference Component.
         */
        invalidate(rect: MindFusion.Drawing.Rect, panel: Component): void;
        /**
         * Invalidates layout of specified component.
         * @param panel The component to invalidate.
         */
        invalidateLayout(panel: Component): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Identifies visibility of components.
    * @enum
    * @name Visibility
    * @param [Hidden] The component is hidden but participates in layout measurements.c
    * @param [Collapsed] The component is hidden and does not participate in layout measurements.
    * @param [Visible] The component is visible.
    */
    enum Visibility {
        /**
        * The component is hidden but participates in layout measurements.
        */
        Hidden = 0,
        /**
        * The component is hidden and does not participate in layout measurements.
        */
        Collapsed = 1,
        /**
        * The component is visible.
        */
        Visible = 2,
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a border UI component.
    * @property {Component} content Gets or sets the Component displayed inside this border.
    * @property {Number} padding Gets or sets the padding space between this border and its Content.
    * @property {Number} borderThickness Gets or sets the border thickness.
    * @property {MindFusion.Charting.Drawing.Brush} borderBrush Gets or sets the Brush used to draw the border outlines.
    */
    class BorderComponent extends Component {
        /**
         * Initializes a new instance of the BorderComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this border and its Content.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this border and arranges its Content.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this border in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Gets or sets the Component displayed inside this border.
         */
        /**
         * Gets or sets the Component displayed inside this border.
         */
        content: Component;
        /**
         * Gets or sets the padding space between this border and its Content.
         */
        /**
         * Gets or sets the padding space between this border and its Content.
         */
        padding: number;
        /**
         * Gets or sets the border thickness.
         */
        /**
         * Gets or sets the border thickness.
         */
        borderThickness: number;
        /**
         * Gets or sets the Brush used to draw the border outlines.
         */
        /**
         * Gets or sets the Brush used to draw the border outlines.
         */
        borderBrush: MindFusion.Charting.Drawing.Brush;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a button UI component.
    * @property {Component} content Gets or sets the Component displayed inside this border.
    * @property {Number} padding Gets or sets the padding space between this border and its Content.
    */
    class ButtonComponent extends Component {
        /**
         * Initializes a new instance of the ButtonComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this button.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this button relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this button in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.CreateController override. Returns a controller used to interact with this button.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of a ComponentController -derived class.
         */
        createController(context: RenderContext): ComponentController;
        raiseClicked(): void;
        /**
         * Raises the Clicked event.
         * @param {EventArgs} e An instance of the EventArgs class.
         */
        onClicked(e: EventArgs): void;
        /**
         * Raises the CustomDraw event.
         * @param {ButtonDrawEventArgs} e An instance of the ButtonDrawEventArgs class.
         */
        onCustomDraw(e: ButtonDrawEventArgs): void;
        /**
         * Raised when the user clicks on this button.
         * @event ButtonComponent.clicked
         * @type {EventDispatcher}
         * @property {ButtonComponent} sender
         * @property {EventArgs} args
         */
        clicked: MindFusion.Charting.Common.EventDispatcher<EventArgs>;
        /**
         * Raised to let you custom-draw button graphics.
         * @event ButtonComponent.customDraw
         * @type {ButtonDrawEventDispatcher}
         * @property {ButtonComponent} sender
         * @property {ButtonDrawEventArgs} args
         */
        customDraw: ButtonDrawEventDispatcher;
        /**
         * Gets or sets the content displayed inside this button.
         */
        /**
         * Gets or sets the content displayed inside this button.
         */
        content: Component;
        /**
         * Gets or sets the padding space between button's content and its borders.
         */
        /**
         * Gets or sets the padding space between button's content and its borders.
         */
        padding: number;
        isPressed: boolean;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a column in a GridPanel.
    * @property {LengthType} lengthType Gets or sets the column's sizing mode.
    * @property {Number} width Gets or sets fixed width for this column.
    */
    class GridColumn implements AutoSize {
        /**
         * Returns the column's measured width.
         * @returns {Number} A number value representing the column's width.
         */
        measuredSize(): number;
        /**
         * Sets the column's position.
         * @param {Number} value X coordinate of the column.
         */
        setPos(value: number): void;
        /**
         * Gets or sets the column's sizing mode.
         */
        /**
         * Gets or sets the column's sizing mode.
         */
        lengthType: LengthType;
        /**
         * Gets whether the column should be sized relatively to other columns in the grid panel.
         * @returns {Boolean} true to apply relative size to this column, or false otherwise.
         */
        relativeSize(): boolean;
        /**
         * Gets or sets fixed width for this column.
         */
        /**
         * Gets or sets fixed width for this column.
         */
        width: number;
        xInParent: number;
        measuredWidth: number;
        fromJson(obj: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a row in a GridPanel.
    * @property {LengthType} lengthType Gets or sets the row's sizing mode.
    * @property {Number} height Gets or sets fixed height for this row.
    */
    class GridRow implements AutoSize {
        /**
         * Returns the row's measured height.
         * @return A number value representing the row's height.
         */
        measuredSize(): number;
        /**
         * Sets the row's position.
         * @param value Y coordinate of the row.
         */
        setPos(value: number): void;
        /**
         * Gets or sets the row's sizing mode.
         */
        /**
         * Gets or sets the row's sizing mode.
         */
        lengthType: LengthType;
        /**
         * Gets whether the row should be sized relatively to other rows in the grid panel.
         * @return true to apply relative size to this row, or false otherwise.
         */
        relativeSize(): boolean;
        /**
         * Gets or sets fixed height for this row.
         */
        /**
         * Gets or sets fixed height for this row.
         */
        height: number;
        yInParent: number;
        measuredHeight: number;
        fromJson(obj: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a component that draws a bitmap image.
    * @property {String} location Gets or sets Image by its file location.
    * @property {Boolean} autoSize Gets or sets a value indicating whether the component should auto-size to match the dimensions of its Image.
    * @property {MindFusion.Charting.Drawing.ImageAlign} imageAlign Gets or sets the image alignment relative to the component.
    */
    class ImageComponent extends Component {
        /**
         * Initializes a new instance of the ImageComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws associated Image in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Gets or sets Image by its file location.
         */
        /**
         * Gets or sets Image by its file location.
         */
        location: string;
        /**
         * Gets or sets a value indicating whether the component
         * should auto-size to match the dimensions of its Image.
         */
        /**
         * Gets or sets a value indicating whether the component
         * should auto-size to match the dimensions of its Image.
         */
        autoSize: boolean;
        /**
         * Gets or sets the image alignment relative to the component.
         */
        /**
         * Gets or sets the image alignment relative to the component.
         */
        imageAlign: MindFusion.Charting.Drawing.ImageAlign;
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a Component that draws text.
    * @property {String} text Gets or sets the text that should be drawn inside this component.
    * @property {String} fontName Gets or sets the name of the font that should be used to draw the component's text.
    * @property {Number} fontSize Gets or sets the size of the font that should be used to draw the component's text.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets the style of the font that should be used to draw the component's text.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets the Brush that should be used to draw the component's text.
    * @property {TextStyleHint} styleHint Gets or sets a value indicating which attribute values this component should inherit from current Theme if its local text appearance properties are not set.
    */
    class TextComponent extends Component {
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws associated Text in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Gets or sets the text that should be drawn inside this component.
         */
        /**
         * Gets or sets the text that should be drawn inside this component.
         */
        text: string;
        /**
         * Gets or sets the name of the font that should be used to draw the component's text.
         */
        /**
         * Gets or sets the name of the font that should be used to draw the component's text.
         */
        fontName: string;
        /**
         * Gets or sets the size of the font that should be used to draw the component's text.
         */
        /**
         * Gets or sets the size of the font that should be used to draw the component's text.
         */
        fontSize: number;
        /**
         * Gets or sets the style of the font that should be used to draw the component's text.
         */
        /**
         * Gets or sets the style of the font that should be used to draw the component's text.
         */
        fontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush that should be used to draw the component's text.
         */
        /**
         * Gets or sets the Brush that should be used to draw the component's text.
         */
        textBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a value indicating which attribute values this component should inherit
         * from current Theme if its local text appearance properties are not set.
         */
        /**
         * Gets or sets a value indicating which attribute values this component should inherit
         * from current Theme if its local text appearance properties are not set.
         */
        styleHint: MindFusion.Charting.TextStyleHint;
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a component that contains multiple child components and manages their layout.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Component>} children Gets the list of child components of this panel.
    * @property {RootControl} parentControl Gets or sets a reference to the control containing this panel.
    */
    class Panel extends Component {
        /**
         * Initializes a new instance of the Panel class.
         */
        constructor();
        /**
         * Component.Draw override. Draws child components in specified RenderContext.
         * @param context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this panel and its child components.
         * @param maxWidth The maximum width provided by parent component.
         * @param maxHeight The maximum height provided by parent component.
         * @param context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Visit override. Implements the visitor design pattern.
         * @param visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: ComponentVisitor): void;
        /**
         * Component.HitTest override. Returns the component containing specified point.
         * @param {Number} x X coordinate of the point to test.
         * @param {Number} y Y coordinate of the point to test.
         * @returns {Component} A Component instance if one contains the point, or null otherwise.
         */
        hitTest(x: number, y: number): Component;
        /**
         * Component.Invalidate override. Invalidates the appearance
         * of this panel and calls its Draw method at next draw operation.
         * @param {MindFusion.Drawing.Rect} [rect] A Rect instance specifying the invalid rectangle.
         */
        invalidate(rect?: MindFusion.Drawing.Rect): void;
        /**
         * Component.InvalidateLayout override. Invalidates the current layout
         * and runs a new layout pass before next draw operation.
         */
        invalidateLayout(): void;
        measureChild(child: Component, maxWidth: number, maxHeight: number, context: RenderContext): MindFusion.Drawing.Size;
        /**
        * Gets the list of child components of this panel.
        */
        children: MindFusion.Charting.Collections.ObservableCollection<Component>;
        /**
         * Gets or sets a reference to the control containing this panel.
         */
        /**
         * Gets or sets a reference to the control containing this panel.
         */
        parentControl: RootControl;
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a layout panel that arranges its child components in a grid.
    * @property {MindFusion.Charting.Collections.List<GridRow>} rows Gets or sets a list of GridRow objects specifying row attributes.
    * @property {MindFusion.Charting.Collections.List<GridColumn>} columns Gets or sets a list of GridColumn objects specifying column attributes.
    */
    class GridPanel extends Panel {
        /**
         * Initializes a new instance of the GridPanel class.
         */
        constructor();
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param maxWidth The maximum width provided by parent component.
         * @param maxHeight The maximum height provided by parent component.
         * @param context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param x A number value specifying horizontal position.
         * @param y A number value specifying vertical position.
         * @param w A number value specifying the component's width.
         * @param h A number value specifying the component's height.
         * @param context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Gets or sets a list of GridRow objects specifying row attributes.
         */
        /**
         * Gets or sets a list of GridRow objects specifying row attributes.
         */
        rows: MindFusion.Charting.Collections.List<GridRow>;
        /**
         * Gets or sets a list of GridColumn objects specifying column attributes.
         */
        /**
         * Gets or sets a list of GridColumn objects specifying column attributes.
         */
        columns: MindFusion.Charting.Collections.List<GridColumn>;
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Represents a layout panel that arranges its child components over each other.
     */
    class SimplePanel extends Panel {
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a layout panel that arranges its child components in a stack.
    * @property {Orientation} orientation Gets or sets the stack orientation.
    */
    class StackPanel extends Panel {
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Gets or sets the stack orientation.
         */
        /**
         * Gets or sets the stack orientation.
         */
        orientation: Orientation;
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Defines an interface for enumerating all series associated with a component of the dashboard.
     */
    interface SeriesContainer {
        /**
         * Enumerates the series associated with this component.
         * @returns An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
        * Gets the index of the dimension whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
        toJson(): any;
        fromJson(json: any): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Base class for renderer objects that draw data series inside a Plot.
    * @property {SeriesStyle} seriesStyle A SeriesStyle instance specifying the appearance of series associated with this renderer.
    * @property {String} labelFontName Gets or sets the name of font that should be used to draw labels of data items.
    * @property {Number} labelFontSize Gets or sets the size of font that should be used to draw labels of data items.
    * @property {MindFusion.Charting.Drawing.FontStyle} labelFontStyle Gets or sets the style of font that should be used to draw labels of data items.
    * @property {MindFusion.Charting.Drawing.Brush} labelBrush Gets or sets the Brush that should be used to draw labels of data items.
    * @property {Boolean} showDataLabels Gets or sets the kind of data labels to draw.
    * @property {Boolean} showHighlight Gets or sets a value indicating whether to show highlights on data items.
    * @property {Boolean} showToolTips Gets or sets a value indicating whether to show tooltips.
    */
    abstract class SeriesRenderer implements SeriesContainer, MindFusion.Charting.Common.INotifyPropertyChanged {
        /**
         * Initializes a new instance of the SeriesRenderer class.
         */
        constructor();
        dataReader: DataReader;
        /**
         * Gets the brush that should be used to fill the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the brush that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveStroke(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the thickness of the pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveStrokeThickness(seriesIndex: number, dataIndex: number, context: RenderContext): number;
        /**
         * Gets the dash style of the pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets the Pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveStrokePen(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.Pen;
        /**
         * A SeriesStyle instance specifying the appearance of series associated with this renderer.
         */
        /**
         * A SeriesStyle instance specifying the appearance of series associated with this renderer.
         */
        seriesStyle: SeriesStyle;
        /**
         * Returns a SeriesStyle object that meets specified criteria.
         * @param check A StyleCheck delegate that tests SeriesStyle for some criteria.
         * @param context A RenderContext instance used to access styles and theme from the dashboard hierarchy.
         * @returns A SeriesStyle instance, or null if none meets spcified criteria.
         */
        searchStyle(check: StyleCheck, context: RenderContext): SeriesStyle;
        /**
         * Draws the series data in specified RenderContext.
         * @param context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Draws highlighted data item in specified RenderContext.
         * @param context A RenderContext instance.
         * @param hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * Sets tooltip text and lcoation.
         * @param text A string specifying tooltip text.
         * @param location A Point specifying tooltip location.
         */
        setToolTip(text: string, location: MindFusion.Drawing.Point): void;
        /**
         * Hit-tests the visual representation of the series for a data item.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Measures the data range of rendered series and assigns it to the
         * associated Axis objects if their MinValue and MaxValue are not set.
         * @param context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * Adjusts the data range of associated Axis objects after initial measure pass.
         * @param context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * Called to reset measure accumulators at the beginning of a measure pass.
         * @param context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        /**
         * Gets or sets the name of font that should be used to draw labels of data items.
         */
        /**
         * Gets or sets the name of font that should be used to draw labels of data items.
         */
        labelFontName: string;
        /**
         * Gets or sets the size of font that should be used to draw labels of data items.
         */
        /**
         * Gets or sets the size of font that should be used to draw labels of data items.
         */
        labelFontSize: number;
        /**
         * Gets or sets the style of font that should be used to draw labels of data items.
         */
        /**
         * Gets or sets the style of font that should be used to draw labels of data items.
         */
        labelFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush that should be used to draw labels of data items.
         */
        /**
         * Gets or sets the Brush that should be used to draw labels of data items.
         */
        labelBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the kind of data labels to draw.
         */
        /**
         * Gets or sets the kind of data labels to draw.
         */
        showDataLabels: LabelKinds;
        /**
        * Gets a value indicating whether to show highlights on data items.
        */
        /**
        * Sets a value indicating whether to show highlights on data items.
        */
        showHighlight: boolean;
        /**
        * Gets a value indicating whether to show tooltips.
        */
        /**
        * Sets a value indicating whether to show tooltips.
        */
        showToolTips: boolean;
        renderDataLabels(series: Series, kind: LabelKinds): boolean;
        /**
         * Gets the Font that should be used to draw labels of data items.
         * @param context A RenderContext instance used to find styles and theme from dashboard hierarchy.
         * @returns A Font instance.
         */
        effectiveLabelFont(context: RenderContext): MindFusion.Charting.Drawing.Font;
        /**
         * Gets the System.Drawing.Brush that should be used to draw labels of data items.
         * @param context A RenderContext instance used to find styles and theme from dashboard hierarchy.
         * @returns A System.Drawing.Brush instance.
         */
        effectiveLabelBrush(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        drawIn3DPlot(): boolean;
        getFillAt(index: number): MindFusion.Charting.Drawing.Brush;
        getStrokeAt(index: number): MindFusion.Charting.Drawing.Pen;
        /**
         * Raises the PropertyChanged event.
         * @param propertyName Specifies the name of changed property.
         */
        protected onPropertyChanged(propertyName: string): void;
        /**
         * Occurs when a property value changes.
         * @event SeriesRenderer.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {SeriesRenderer} sender
         * @property {PropertyChangedEventArgs} args
         */
        propertyChanged: MindFusion.Charting.Common.PropertyChangedEventDispatcher;
        /**
         * Implements the SeriesContainer interface. Enumerates the series associated with this component.
         * @returns An instance of the IEnumerable&lt;Series&gt; class.
         */
        abstract enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
        * Implements the SeriesContainer interface. Gets the index of the dimension
        * whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
        /**
         * Subscribes to the DataChanged event of specified Series.
         * @param {Series} series A Series instance.
         */
        protected subscribe(series: Series): void;
        /**
         * Unsubscribes from the DataChanged event of specified Series.
         * @param {Series} series A Series instance.
         */
        protected unsubscribe(series: Series): void;
        /**
         * Called when Series raise their DataChanged event.
         * @param {Object} sender The Series raising the event.
         * @param {EventArgs} e An EventArgs instance.
         */
        protected onSeriesDataChanged(e: EventArgs): void;
        /**
         * Raised when Series raise their DataChanged event.
         * @event SeriesRenderer.dataChanged
         * @type {EventDispatcher}
         * @property {SeriesRenderer} sender
         * @property {EventArgs} args
         */
        dataChanged: Common.EventDispatcher<EventArgs>;
        m_id: number;
        id(): number;
        fromJson(obj: any): any;
        toJson(): any;
        static seriesFromJson(obj: any): Series | MindFusion.Charting.Collections.ObservableCollection<Series>;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A base class for series renderers that draw in two dimensional Cartesian coordinate system.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets a list of Series drawn by this Renderer2D.
    * @property {MindFusion.Charting.Axis} xAxis Gets the X axis associated with this Renderer2D.
    * @property {MindFusion.Charting.Axis} yAxis Gets the Y axis associated with this Renderer2D.
    */
    class Renderer2D extends SeriesRenderer {
        /**
         * Initializes a new instance of the Renderer2D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets a list of Series drawn by this Renderer2D.
         */
        /**
         * Gets or sets a list of Series drawn by this Renderer2D.
         */
        series: MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePoints1(context: RenderContext, process: ProcessPoint): void;
        domainAxis(context: RenderContext): Axis;
        imageAxis(context: RenderContext): Axis;
        domainSorted(seriesIndex: number): boolean;
        domainMin(s: Series): number;
        domainMax(s: Series): number;
        /**
         * Gets the domain axis coordinate (input value) of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        domainData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets the image axis coordinate (output value) of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        imageData(seriesIndex: number, dataIndex: number): number;
        yDomain: boolean;
        plotLen(context: RenderContext): number;
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {Boolean} frontToBack true if the series list should be enumerated from front to back, or false otherwise.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePoints(context: RenderContext, frontToBack: boolean, process: ProcessPoint): void;
        rangeMargin: number;
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoints} process A ProcessPoints callback.
         * @remarks The signature of the ProcessPoints delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point1 A Point instance containing the Plot2D coordinates corresponding to previous data item.
         * param {Point} point2 A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePointPairs(context: RenderContext, process: ProcessPoints): void;
        /**
         * Enumerates each series once providing a list of all visible points at each iteration.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessRange} process A ProcessRange callback.
         * @remarks The signature of the ProcessRange delegate is as follows:
         * 'function(seriesIndex, points)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {List<Point>} points A list of Point values containing the Plot2D coordinates corresponding to data items in currently visible range.
         * The method is not expected to return a value.
         */
        enumVisibleRanges(context: RenderContext, process: ProcessRange): void;
        /**
         * SeriesRenderer.StartMeasureData override. Called to reset measure
         * accumulators at the beginning of a measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        findDomainMin(): number;
        findDomainMax(): number;
        /**
         * Implements the SeriesContainer interface.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
         * Gets the X axis associated with this Renderer2D.
         */
        /**
         * Gets the X axis associated with this Renderer2D.
         */
        xAxis: Axis;
        /**
         * Gets the Y axis associated with this Renderer2D.
         */
        /**
         * Gets the Y axis associated with this Renderer2D.
         */
        yAxis: Axis;
        /**
         * SeriesRenderer.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        fitExponent(range: number): number;
        adjustForNonEmptyBars(context: RenderContext): void;
        /**
         * Gets the X value of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        xData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets the Y value of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        yData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets a value indicating whether values of specified series increase monotonously in X dimension.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @returns {Boolean} true if specified series is sorted, or false otherwise.
         */
        xSorted(seriesIndex: number): boolean;
        /**
         * Gets a value indicating whether values of specified series increase monotonously in Y dimension.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @returns {Boolean} true if specified series is sorted, or false otherwise.
         */
        ySorted(seriesIndex: number): boolean;
        /**
         * Gets the coordinates of specified data item when mapped to a Plot2D pixel.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.Axis} xAxis An Axis reference specifying the X axis.
         * @param {MindFusion.Charting.Axis} yAxis An Axis reference specifying the Y axis.
         * @param {Components.Component} component An instance of Plot2D or derived class.
         * @returns {MindFusion.Drawing.Point} A Point containing Plot2D coordinates corresponding to specified data item.
         */
        getPixel(seriesIndex: number, dataIndex: number, xAxis: Axis, yAxis: Axis, component: MindFusion.Charting.Components.Component): MindFusion.Drawing.Point;
        /**
         * Gets the coordinates of specified data item when mapped to a Plot2D pixel.
         * @param {Number} valueX The X value of data item in logical coordinate system.
         * @param {MindFusion.Charting.Axis} xAxis The X Axis from which logical value is mapped to plot's actual width.
         * @param {Number} valueY The Y value of data item in logical coordinate system.
         * @param {MindFusion.Charting.Axis} yAxis The Y Axis from which logical value is mapped to plot's actual height.
         * @param {Components.Component} component An instance of Plot2D or derived class.
         * @returns {MindFusion.Drawing.Point}
         */
        getPixel1(valueX: number, xAxis: Axis, valueY: number, yAxis: Axis, component: MindFusion.Charting.Components.Component): MindFusion.Drawing.Point;
        /**
         * Gets the maximum sum of X data values locates at same index in all series.
         * @returns {Number} A number value containing the maximum sum.
         */
        getMaxXSum(): number;
        /**
         * Gets the maximum sum of Y data values locates at same index in all series.
         * @returns {Number} A number value containing the maximum sum.
         */
        getMaxYSum(): number;
        /**
         * Gets the index of first data item in currently visible plot range.
         * @param {Number} s An integer value specifying index in Series list.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} An integer index of first visible data item.
         */
        getFirstInRange(s: number, context: RenderContext): number;
        getFirstInRange(s: number, axis: Axis): number;
        /**
         * Gets the index of last data item in currently visible plot range.
         * @param {Number} s An integer value specifying index in Series list.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} An integer index of last visible data item.
         */
        getLastInRange(s: number, context: RenderContext): number;
        getLastInRange(s: number, axis: Axis): number;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        midX(rect: MindFusion.Drawing.Rect): number;
        midY(rect: MindFusion.Drawing.Rect): number;
        fromJson(json: any): any;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process a data point one element at a time.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
    */
    interface ProcessPoint {
        (seriesIndex: number, dataIndex: number, point: MindFusion.Drawing.Point): any;
    }
    /**
    * Defines the signature of delegates called to process data points in pairs.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {Point} point1 A Point instance containing the Plot2D coordinates corresponding to previous data item.
    * @param {Point} point2 A Point instance containing the Plot2D coordinates corresponding to current data item.
    */
    interface ProcessPoints {
        (seriesIndex: number, dataIndex: number, point1: MindFusion.Drawing.Point, point2: MindFusion.Drawing.Point): any;
    }
    /**
    * Defines the signature of delegates called to process all points from current data range at once.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {List<Point>} points A list of Point values containing the Plot2D coordinates corresponding to data items in currently visible range.
    */
    interface ProcessRange {
        (seriesIndex: number, points: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws annotations in its containing plot.
     */
    class AnnotationRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the AnnotationRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as annotations.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawIn3DPlot(): boolean;
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    interface ProcessInterval {
        (value: number, index: number): any;
    }
    /**
    * @class Represents an Axis range.
    * @property {String} title Gets or sets the axis title.
    * @property {Number} minValue Gets or sets the smallest value displayed on this axis.
    * @property {Number} maxValue Gets or sets the largest value displayed on this axis.
    * @property {Number} interval Gets or sets the size of axis intervals.
    * @property {String} numberFormat Gets or sets the number format of coordinate labels.
    */
    class Axis implements MindFusion.Charting.Common.INotifyPropertyChanged {
        /**
         * Initializes a new instance of the Axis class.
         */
        constructor();
        /**
         * Determines whether specified value is within the axis range.
         * @param {Number} value The number to check.
         * @returns {Boolean} true if value is inside the current axis range, or false otherwise.
         */
        inRange(value: number): boolean;
        inExtendedRange(value: number, margin: number): boolean;
        /**
         * Raises the PropertyChanged event.
         * @param {String} propertyName Specifies the name of changed property.
         */
        protected onPropertyChanged(propertyName: string): void;
        /**
         * Occurs when a property value changes.
         * @event Axis.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {Axis} sender
         * @property {PropertyChangedEventArgs} args
         */
        propertyChanged: MindFusion.Charting.Common.PropertyChangedEventDispatcher;
        /**
         * Gets or sets the axis title.
         */
        /**
         * Gets or sets the axis title.
         */
        title: string;
        /**
         * Gets or sets the smallest value displayed on this axis.
         */
        /**
         * Gets or sets the smallest value displayed on this axis.
         */
        minValue: number;
        /**
         * Gets or sets the largest value displayed on this axis.
         */
        /**
         * Gets or sets the largest value displayed on this axis.
         */
        maxValue: number;
        /**
         * Gets or sets the size of axis intervals.
         */
        /**
         * Gets or sets the size of axis intervals.
         */
        interval: number;
        /**
         * Gets or sets the number format of coordinate labels.
         */
        /**
         * Gets or sets the number format of coordinate labels.
         */
        numberFormat: string;
        enumerateIntervals(alignToView: boolean, process: ProcessInterval, partial?: boolean): void;
        numIntervals(): number;
        measuredMinValue: number;
        measuredMaxValue: number;
        effectiveMinValue: number;
        effectiveMaxValue: number;
        /**
         * Maps a value from this axis' coordinate system to a pixel position in specified view.
         * @param {Number} value A number value.
         * @param {Number} viewSize The view size.
         * @returns {Number} X coordinate of pixel.
         */
        mapValueToPixelX(value: number, viewSize: number): number;
        /**
         * Maps a value from this axis' coordinate system to a pixel position in specified view.
         * @param {Number} value A number value.
         * @param {Number} viewSize The view size.
         * @returns {Number} Y coordinate of pixel.
         */
        mapValueToPixelY(value: number, viewSize: number): number;
        m_id: number;
        id(): number;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            id: number;
            interval: number;
            minValue: number;
            maxValue: number;
            numberFormat: string;
            title: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A base class for components that render Axis ranges.
    * @property {MindFusion.Charting.Axis} axis Gets or sets the Axis that will be drawn by this object.
    * @property {Boolean} pinLabels Gets or sets a value indicating whether coordinate labels should be pinned in place or scroll together with the plot when users pan it.
    * @property {SeriesContainer} labelsSource Gets or sets the object whose Series labels should be rendered along this axis.
    * @property {Boolean} showCoordinates Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
    * @property {Boolean} showSeriesLabels Gets or sets a value indicating whether this AxisRenderer should draw data labels.
    * @property {Boolean} showTicks Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
    * @property {MindFusion.Charting.Drawing.Brush} labelBrush Gets or sets the Brush that should be used to draw axis labels.
    * @property {String} labelFontName Gets or sets the name of font that should be used to draw axis labels.
    * @property {Number} labelFontSize Gets or sets the size of font that should be used to draw axis labels.
    * @property {MindFusion.Charting.Drawing.FontStyle} labelFontStyle Gets or sets the style of font that should be used to draw axis labels.
    * @property {Number} labelPadding Gets or sets the padding space between the axis line and coordinate labels.
    * @property {Number} labelRotationAngle Gets or sets the rotation angle of the labels.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush that should be used to draw the axis Title.
    * @property {String} titleFontName Gets or sets the name of font that should be used to draw the axis Title.
    * @property {Number} titleFontSize Gets or sets the size of font that should be used to draw the axis Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font that should be used to draw the axis Title.
    * @property {MindFusion.Charting.Drawing.Brush} axisStroke Gets or sets the Brush that should be used to draw axis lines.
    * @property {Number} axisStrokeThickness Gets or sets the thickness axis lines should be stroked with.
    * @property {MindFusion.Charting.Drawing.DashStyle} axisStrokeDashStyle Gets or sets the dash style axis lines should be stroked with.
    */
    abstract class AxisRenderer extends MindFusion.Charting.Components.Component {
        /**
         * Initializes a new instance of the AxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         */
        constructor(axis: Axis);
        /**
         * The Axis that will be drawn by this object.
         */
        /**
         * The Axis that will be drawn by this object.
         */
        axis: Axis;
        /**
         * Gets the effective Axis in current context, getting one from Plot2D
         * or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        abstract effectiveAxis(context: RenderContext): Axis;
        /**
         * Gets or sets a value indicating whether coordinate labels should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        /**
         * Gets or sets a value indicating whether coordinate labels should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        pinLabels: boolean;
        getLabel(index: number, value: number, context: RenderContext): string;
        /**
         * Gets or sets the object whose Series labels should be rendered along this axis.
         */
        /**
         * Gets or sets the object whose Series labels should be rendered along this axis.
         */
        labelsSource: SeriesContainer;
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
         */
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
         */
        showCoordinates: boolean;
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw data labels.
         */
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw data labels.
         */
        showSeriesLabels: boolean;
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
         */
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
         */
        showTicks: boolean;
        tickLength: number;
        /**
         * Gets the Font that should be used to draw axis labels.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveLabelFont(context: RenderContext): MindFusion.Charting.Drawing.Font;
        /**
         * Gets the Brush that should be used to draw axis labels.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveLabelBrush(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the Font that should be used to draw the axis Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveTitleFont(context: RenderContext): MindFusion.Charting.Drawing.Font;
        /**
         * Gets the Brush that should be used to draw the axis Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveTitleBrush(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw axis labels.
         */
        /**
         * Gets or sets the Brush that should be used to draw axis labels.
         */
        labelBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font that should be used to draw axis labels.
         */
        /**
         * Gets or sets the name of font that should be used to draw axis labels.
         */
        labelFontName: string;
        /**
         * Gets or sets the size of font that should be used to draw axis labels.
         */
        /**
         * Gets or sets the size of font that should be used to draw axis labels.
         */
        labelFontSize: number;
        /**
         * Gets or sets the style of font that should be used to draw axis labels.
         */
        /**
         * Gets or sets the style of font that should be used to draw axis labels.
         */
        labelFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the padding space between the axis line and coordinate labels.
         */
        /**
         * Gets or sets the padding space between the axis line and coordinate labels.
         */
        labelPadding: number;
        /**
         * Gets or sets the rotation angle of the labels.
         */
        /**
         * Gets or sets the rotation angle of the labels.
         */
        labelRotationAngle: number;
        /**
         * Gets or sets the Brush that should be used to draw the axis Title.
         */
        /**
         * Gets or sets the Brush that should be used to draw the axis Title.
         */
        titleBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font that should be used to draw the axis Title.
         */
        /**
         * Gets or sets the name of font that should be used to draw the axis Title.
         */
        titleFontName: string;
        /**
         * Gets or sets the size of font that should be used to draw the axis Title.
         */
        /**
         * Gets or sets the size of font that should be used to draw the axis Title.
         */
        titleFontSize: number;
        /**
         * Gets or sets the style of font that should be used to draw the axis Title.
         */
        /**
         * Gets or sets the style of font that should be used to draw the axis Title.
         */
        titleFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush that should be used to draw axis lines.
         */
        /**
         * Gets or sets the Brush that should be used to draw axis lines.
         */
        axisStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the thickness axis lines should be stroked with.
         */
        /**
         * Gets or sets the thickness axis lines should be stroked with.
         */
        axisStrokeThickness: number;
        /**
         * Gets or sets the dash style axis lines should be stroked with.
         */
        /**
         * Gets or sets the dash style axis lines should be stroked with.
         */
        axisStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets the Pen that should be used to draw axis lines.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A System.Pen instance.
         */
        effectivePen(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets the Brush that should be used to stroke axis lines.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveAxisStroke(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the thickness of axis line strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveAxisStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of axis line strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveAxisDashStyle(context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        fromJson(json: any): any;
        toJson(): any;
        dataReader: DataReader;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Defines properties common to all bar-chart renderers.
     */
    interface BarContainer {
        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        barSpacingRatio: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws bars in its containing plot.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
    * @property {Number} sameIndexSpacingRatio Gets or sets the ratio of empty space to occupied space in bar groups drawn for data items as same index in each series.
    */
    class BarRenderer extends Renderer2D implements BarContainer {
        /**
         * Initializes a new instance of the BarRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as bars.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Enumerates the bars visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessBars} process A ProcessBars callback.
         * @remarks The signature of the ProcessBars delegate is as follows:
         * 'function(seriesIndex, dataIndex, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Rect} bounds A Rect representing the boundaries of current bar.
         * The method is not expected to return a value.
         */
        enumVisibleBars(context: RenderContext, process: ProcessBars): void;
        /**
         * Gets or sets the ratio of empty space to occupied space
         * in bar groups drawn for data items as same index in each series.
         */
        /**
         * Gets or sets the ratio of empty space to occupied space
         * in bar groups drawn for data items as same index in each series.
         */
        sameIndexSpacingRatio: number;
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        barSpacingRatio: number;
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.AdjustDataRange override. Adjusts the data range of associated
         * Axis objects after initial measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: MindFusion.Drawing.Rect, labelRenderer: TextRenderer): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bar.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        fromJson(json: string): void;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process bars.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Rect} bounds A Rect representing the boundaries of current bar.
    */
    interface ProcessBars {
        (seriesIndex: number, dataIndex: number, bounds: MindFusion.Drawing.Rect): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents one-dimensional series defined by e list of data values and a list of labels.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Data list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 1.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Number>} data Gets or sets the data values contained in this series.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class SimpleSeries implements Series {
        /**
         * Initializes a new instance of the SimpleSeries class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} labels A list of labels.
         */
        constructor(values: MindFusion.Charting.Collections.List<number> | Array<number>, labels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. Gets a value indicating whether
         * the specified data item should be emphasized by the SeriesRenderer.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. SimpleSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Data list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 1.
         */
        dimensions: number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        supportedLabels: LabelKinds;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;
        /**
         * Gets or sets the data values contained in this series.
         */
        /**
         * Gets or sets the data values contained in this series.
         */
        data: MindFusion.Charting.Collections.List<number>;
        protected values: MindFusion.Charting.Collections.List<number>;
        protected labels: MindFusion.Charting.Collections.List<string>;
        protected emphasizedIndices: MindFusion.Charting.Collections.List<number>;
        /**
         * Raised when the values in this series change.
         * @event SimpleSeries.dataChanged
         * @type {EventDispatcher}
         * @property {SimpleSeries} sender
         * @property {EventArgs} args
         */
        dataChanged: Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(json: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents one-dimensional series defined by e list of data values
    * and several lists of labels.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels SimpleSeries.SupportedLabels override. Returns a combination of InnerLabel, OuterLabel and XAxisLabel.
    * @property {MindFusion.Charting.Collections.List<String>} innerLabels Gets or sets the inner labels.
    * @property {MindFusion.Charting.Collections.List<String>} topLabels Gets or sets the top labels.
    * @property {MindFusion.Charting.Collections.List<String>} xAxisLabels Gets or sets the X axis labels.
    */
    class BarSeries extends SimpleSeries {
        /**
         * Initializes a new instance of the BarSeries class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Nuber>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} innerLabels A list of inner labels.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} [topLabels] A list of top labels.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} [xAxisLabels] A list of X axis labels.
         */
        constructor(values: MindFusion.Charting.Collections.List<number> | Array<number>, innerLabels: MindFusion.Charting.Collections.List<string> | Array<string>, topLabels?: MindFusion.Charting.Collections.List<string> | Array<string>, xAxisLabels?: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * SimpleSeries.GetLabel override. Returns an element of a labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Gets or sets the inner labels.
         */
        /**
         * Gets or sets the inner labels.
         */
        innerLabels: MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the top labels.
         */
        /**
         * Gets or sets the top labels.
         */
        topLabels: MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the X axis labels.
         */
        /**
         * Gets or sets the X axis labels.
         */
        xAxisLabels: MindFusion.Charting.Collections.List<string>;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    class BarSpacing {
        constructor(axis: Axis, barsPerGroup: number, groups: number, dataRange: number, lenPixels: number, sameIndexSpacingRatio: number, barSpacingRatio: number);
        barWidth: number;
        padding: number;
        external: number;
        seriesOffset: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Specifies the interface that data providers should implement
     * in order to feed data to SeriesRenderer classes.
     */
    interface Series {
        /**
         * Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Returns a label for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Gets a value indicating whether the series values increase monotonously in specified dimension.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Gets a value indicating whether the specified data item should be emphasized by the SeriesRenderer.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Gets the number of data items in this series.
         */
        size: number;
        /**
         * Gets the number of values (coordinates) that can be returned by each data item.
         */
        dimensions: number;
        /**
         * Gets the title of this series.
         */
        title: string;
        /**
         * Gets the kind of labels supported by this series.
         */
        supportedLabels: LabelKinds;
        /**
         * Raised when the values in this series change.
         * @event Series.dataChanged
         * @type {EventDispatcher}
         * @property {Series} sender
         * @property {EventArgs} args
         */
        dataChanged: MindFusion.Charting.Common.EventDispatcher<EventArgs>;
        toJson(): any;
    }
    interface StyleCheck {
        (style: SeriesStyle): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a series whose data items are retrieved from a data source.
    * @property {any} dataSource Gets or sets the data source this series is bound to.
    * @property {String} xDataField Gets or sets the name of X data field in the data source.
    * @property {String} yDataField Gets or sets the name of Y data field in the data source.
    * @property {String} zDataField Gets or sets the name of Z data field in the data source.
    * @property {String} innerLabelsDataField Gets or sets the name of inner labels data field in the data source.
    * @property {String} outerLabelsDataField Gets or sets the name of inner labels data field in the data source.
    * @property {String} toolTipsDataField Gets or sets the name of tooltips data field in the data source.
    * @property {String} xAxisLabelsDataField Gets or sets the name of X axis labels data field in the data source.
    * @property {String} yAxisLabelsDataField Gets or sets the name of Y axis labels data field in the data source.
    * @property {String} zAxisLabelsDataField Gets or sets the name of Z axis labels data field in the data source.
    * @property {Number} size Implements Series.Size. Gets the number of data items in the data source.
    * @property {Number} dimensions Implements Series.Dimensions. Returns the number of X/Y/ZDataField properties set.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Result depends on which *LabelsDataField properties are set.
    */
    class DataBoundSeries implements Series {
        /**
         * Initializes a new instance of the DataBoundSeries class.
         * @param { any | Array<any> | IEnumerable<any>} dataSource A reference to the data source object.
         */
        constructor(dataSource: any);
        /**
         * Gets or sets the data source this series is bound to.
         */
        /**
         * Gets or sets the data source this series is bound to.
         */
        dataSource: any;
        enumerableDataSource: boolean;
        arrayDataSource: boolean;
        /**
         * Gets or sets the name of X data field in the data source.
         */
        /**
         * Gets or sets the name of X data field in the data source.
         */
        xDataField: string;
        /**
         * Gets or sets the name of Y data field in the data source.
         */
        /**
         * Gets or sets the name of Y data field in the data source.
         */
        yDataField: string;
        /**
         * Gets or sets the name of Z data field in the data source.
         */
        /**
         * Gets or sets the name of Z data field in the data source.
         */
        zDataField: string;
        /**
         * Gets or sets the name of inner labels data field in the data source.
         */
        /**
         * Gets or sets the name of inner labels data field in the data source.
         */
        innerLabelsDataField: string;
        /**
         * Gets or sets the name of outer labels data field in the data source.
         */
        /**
         * Gets or sets the name of outer labels data field in the data source.
         */
        outerLabelsDataField: string;
        /**
         * Gets or sets the name of tooltips data field in the data source.
         */
        /**
         * Gets or sets the name of tooltips data field in the data source.
         */
        toolTipsDataField: string;
        /**
         * Gets or sets the name of X axis labels data field in the data source.
         */
        /**
         * Gets or sets the name of X axis labels data field in the data source.
         */
        xAxisLabelsDataField: string;
        /**
         * Gets or sets the name of Y axis labels data field in the data source.
         */
        /**
         * Gets or sets the name of Y axis labels data field in the data source.
         */
        yAxisLabelsDataField: string;
        /**
         * Gets or sets the name of Z axis labels data field in the data source.
         */
        /**
         * Gets or sets the name of Z axis labels data field in the data source.
         */
        zAxisLabelsDataField: string;
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in the data source.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the data source.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns a label for the specified data item in the data source.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. DataBoundSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. Gets a value indicating whether
         * the series values increase monotonously in specified dimension.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Gets the number of data items in the data source.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns the number of X/Y/ZDataField properties set.
         */
        dimensions: number;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;
        /**
         * Implements Series.SupportedLabels. Result depends on which *LabelsDataField properties are set.
         */
        supportedLabels: LabelKinds;
        /**
         * Raised when the values in this series change.
         * @event DataBoundSeries.dataChanged
         * @type {EventDispatcher}
         * @property {DataBoundSeries} sender
         * @property {EventArgs} args
         */
        dataChanged: Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            innerLabelsDataField: string;
            outerLabelsDataField: string;
            toolTipsDataField: string;
            xAxisLabelsDataField: string;
            yAxisLabelsDataField: string;
            zAxisLabelsDataField: string;
            xDataField: string;
            yDataField: string;
            zDataField: string;
            title: string;
            dataSource: any;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    interface AxisData {
        (series: Series, dataIndex: number): number;
    }
    class DataReader {
        constructor();
        domainDimension: number;
        xData(series: Series, dataIndex: number): number;
        yData(series: Series, dataIndex: number): number;
        xSorted(series: Series): boolean;
        ySorted(series: Series): boolean;
        getMinX(series: Series): number;
        getMaxX(series: Series): number;
        getMinY(series: Series): number;
        getMaxY(series: Series): number;
        getFirstInRange(series: Series, x: Axis, xData: AxisData): number;
        getLastInRange(series: Series, x: Axis, xData: AxisData): number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Specifies formats for DateTime values.
    * @enum
    * @name DateTimeFormat
    * @param [CustomDateTime] Indicates that the number should be formatted as a DateTime value according to a custom set string.
    * @param [FullDateTime] Indicates that the number should be formatted as a DateTime value with a full date pattern.
    * @param [LongDate] Indicates that the number should be formatted as a DateTime value with a long date pattern.
    * @param [LongTime] Indicates that the number should be formatted as a DateTime value with a long time pattern.
    * @param [MonthDateTime] Indicates that the number should be formatted as a DateTime value with a month day pattern.
    * @param [None] The DateTime value is not formatted
    * @param [ShortDate] Indicates that the number should be formatted as a DateTime value with a short date pattern.
    * @param [ShortTime] Indicates that the number should be formatted as a DateTime value with a short time pattern.
    * @param [YearDateTime] Indicates that the number should be formatted as a DateTime value with a year month date pattern.
    */
    enum DateTimeFormat {
        /**
         * Indicates that the number should be formatted as a DateTime value according to a custom set string.
         */
        CustomDateTime = 0,
        /**
         * Indicates that the number should be formatted as a DateTime value with a full date pattern.
         */
        FullDateTime = 1,
        /**
         * Indicates that the number should be formatted as a DateTime value with a long date pattern.
         */
        LongDate = 2,
        /**
         * Indicates that the number should be formatted as a DateTime value with a long time pattern.
         */
        LongTime = 3,
        /**
         * Indicates that the number should be formatted as a DateTime value with a month day pattern.
         */
        MonthDateTime = 4,
        /**
         * The DateTime value is not formatted
         */
        None = 5,
        /**
         * Indicates that the number should be formatted as a DateTime value with a short date pattern.
         */
        ShortDate = 6,
        /**
         * Indicates that the number should be formatted as a DateTime value with a short time pattern.
         */
        ShortTime = 7,
        /**
         * Indicates that the number should be formatted as a DateTime value with a year month date pattern.
         */
        YearDateTime = 8,
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a series that contains Date values as X coordinates and number values as Y coordinates.
    * @property {Number} size Implements Series.Size. Returns the number of elements provided in Date list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns LabelKinds.XAxisLabel.
    * @property {MindFusion.Charting.Collections.List<Date>} dates Gets or sets a list of Date values used as X coordinates of this series.
    * @property {Number} minValue Gets or sets the coordinate corresponding to MinDate.
    * @property {Number} maxValue Gets or sets the coordinate corresponding to MaxDate.
    * @property {Date} minDate Gets or sets the start of the time range.
    * @property {Date} maxDate Gets or sets the end of the time range.
    * @property {String} dateTimeFormat Gets or sets a value indicating how to format Date values as labels.
    * @property {String} customDateTimeFormat Gets or sets a custom format string for Date labels.
    * @property {String} labelPrefix Gets or sets a prefix added in front of formatted Date labels.
    * @property {String} labelSuffix Gets or sets a suffix appended to formatted Date labels.
    */
    class DateTimeSeries implements Series {
        /**
         * Initializes a new instance of the DateTimeSeries class.
         * @param {MindFusion.Charting.Collections.List<Date> | Array<Date>} dates A list of Date values.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} values A list of number values.
         * @param {Date} minDate Identifies the start of the time range.
         * @param {Date} maxDate Identifies the end of the time range.
         */
        constructor(dates: MindFusion.Charting.Collections.List<Date> | Array<Date>, values: MindFusion.Charting.Collections.List<number> | Array<number>, minDate: Date, maxDate: Date);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns Date value at specified index as an XAxisLabel.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsSorted. DateTimeSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.IsEmphasized. DateTimeSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements provided in Date list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        dimensions: number;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets a list of Date values used as X coordinates of this series.
         */
        /**
         * Gets or sets a list of Date values used as X coordinates of this series.
         */
        dates: MindFusion.Charting.Collections.List<Date>;
        /**
         * Gets or sets the coordinate corresponding to MinDate.
         */
        /**
         * Gets or sets the coordinate corresponding to MinDate.
         */
        minValue: number;
        /**
         * Gets or sets the coordinate corresponding to MaxDate.
         */
        /**
         * Gets or sets the coordinate corresponding to MaxDate.
         */
        maxValue: number;
        /**
         * Gets or sets the start of the time range.
         */
        /**
         * Gets or sets the start of the time range.
         */
        minDate: Date;
        /**
         * Gets or sets the end of the time range.
         */
        /**
         * Gets or sets the end of the time range.
         */
        maxDate: Date;
        /**
         * Gets or sets a value indicating how to format Date values as labels.
         */
        /**
         * Gets or sets a value indicating how to format Date values as labels.
         */
        dateTimeFormat: DateTimeFormat;
        /**
         * Gets or sets a custom format string for Date labels.
         */
        /**
         * Gets or sets a custom format string for Date labels.
         */
        customDateTimeFormat: string;
        /**
         * Gets or sets a prefix added in front of formatted Date labels.
         */
        /**
         * Gets or sets a prefix added in front of formatted Date labels.
         */
        labelPrefix: string;
        /**
         * Gets or sets a suffix appended to formatted Date labels.
         */
        /**
         * Gets or sets a suffix appended to formatted Date labels.
         */
        labelSuffix: string;
        /**
         * Raised when the values in this series change.
         * @event DateTimeSeries.dataChanged
         * @type {EventDispatcher}
         * @property {DateTimeSeries} sender
         * @property {EventArgs} args
         */
        dataChanged: Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            values: number[];
            minDate: number;
            maxDate: number;
            title: string;
            labelPrefix: string;
            labelSuffix: string;
            dateTimeFormat: DateTimeFormat;
            customDateTimeFormat: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Indicates Plot2D grid type.
    * @enum
    * @name GridType
    * @param [None] Do not draw grid.
    * @param [Horizontal] Draw horizontal stripes.
    * @param [Vertical] Draw vertical stripes.
    * @param [Crossed] Draw crossed stripes.
    */
    enum GridType {
        /**
        * Do not draw grid.
        */
        None = 0,
        /**
        * Draw horizontal stripes.
        */
        Horizontal = 1,
        /**
        * Draw vertical stripes.
        */
        Vertical = 2,
        /**
        * Draw crossed stripes.
        */
        Crossed = 3,
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents the result of a hit-test operation.
    * @property {Plot} plot Gets or sets the Plot that has been hit.
    * @property {SeriesRenderer} renderer Gets or sets the SeriesRenderer that has been hit.
    * @property {Number} index Gets or sets the data item index within its Series.
    * @property {Number} value Gets or sets the data item value.
    * @property {Series} series Gets or sets the Series that has been hit.
    */
    class HitResult extends EventArgs {
        /**
         * Initializes a new instance of the HitResult class.
         * @param {SeriesRenderer} renderer A SeriesRenderer whose data item has been hit.
         * @param {Number} index An integer index of the data item.
         * @param {Number} value The item's vaue.
         * @param {Series} series The Series that contains the found item.
         */
        constructor(renderer: SeriesRenderer, index: number, value: number, series: Series);
        /**
         * Gets the Plot that has been hit.
         */
        /**
         * Gets the Plot that has been hit.
         */
        plot: Plot;
        /**
         * Gets the SeriesRenderer that has been hit.
         */
        /**
         * Gets the SeriesRenderer that has been hit.
         */
        renderer: SeriesRenderer;
        /**
         * Gets the data item index within its Series.
         */
        /**
         * Gets the data item index within its Series.
         */
        index: number;
        /**
         * Gets the data item value.
         */
        /**
         * Gets the data item value.
         */
        value: number;
        /**
         * Gets the Series that has been hit.
         */
        /**
         * Gets the Series that has been hit.
         */
        series: Series;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies the various kinds of labels that can be drawn for data items.
    * @enum
    * @name LabelKinds
    * @param [None] Do not draw labels.
    * @param [InnerLabel] Draw inner label in graphic representation of data item.
    * @param [OuterLabel] Draw outer label nearby graphic representation of data item.
    * @param [ToolTip] Show label as a tooltip.
    * @param [XAxisLabel] Draw data label at X axis.
    * @param [YAxisLabel] Draw data label at Y axis.
    * @param [ZAxisLabel] Draw data label at Z axis.
    * @param [All] Draw all labels supported by a series.
    */
    enum LabelKinds {
        /**
        * Do not draw labels.
        */
        None = 0,
        /**
        * Draw inner label in graphic representation of data item.
        */
        InnerLabel = 1,
        /**
        * Draw outer label nearby graphic representation of data item.
        */
        OuterLabel = 2,
        /**
        * Show label as a tooltip.
        */
        ToolTip = 4,
        /**
        * Draw data label at X axis.
        */
        XAxisLabel = 8,
        /**
        * Draw data label at Y axis.
        */
        YAxisLabel = 16,
        /**
        * Draw data label at Z axis.
        */
        ZAxisLabel = 32,
        /**
        * Draw all labels supported by a series.
        */
        All = -1,
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A base class for controllers implementing user interaction with Plot components.
    * @property {Component} component Gets the component controlled by this PlotController.
     */
    class PlotController implements MindFusion.Charting.Components.ComponentController {
        /**
         * Initializes a new instance of the PlotController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
         * Implements ComponentController.onMouseWheel. Called when the user scrolls with the middle mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
         */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Implements ComponentController.DrawInteraction. Draws a representation
         * of the current state of user interaction on specified IGraphics surface.
         * @param {IGraphics} graphics An IGraphics instance.
         */
        drawInteraction(graphics: MindFusion.Charting.Drawing.Graphics): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): MindFusion.Charting.Components.ComponentAnimation;
        /**
         * For internal use.
         * @returns {CursorHint} A member of the CursorHint enumeration.
         */
        getCursorHint(x: number, y: number): MindFusion.Charting.Components.CursorHint;
        /**
         * Gets the component controlled by this PlotController.
         */
        component: MindFusion.Charting.Components.Component;
        protected renderContext: RenderContext;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Lets users move a legend within the boundaries of its parent Panel.
    */
    class LegendController extends PlotController {
        /**
         * Initializes a new instance of the LegendController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A component that renders chart legend.
    * @property {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} content Gets or sets a list of SeriesRenderer objects whose Series should be displayed in this legend.
    * @property {String} title Gets or sets the legend's title.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush that should be used to draw the legend's Title.
    * @property {String} titleFontName Gets or sets the name of font that should be used to draw the legend's Title.
    * @property {Number} titleFontSize Gets or sets the size of font that should be used to draw the legend's Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font that should be used to draw the legend's Title.
    * @property {Boolean} showTitle Gets or sets a value indicating whether to display the legend title.
    * @property {Number} padding Gets or sets the padding space between content and borders of this legend.
    * @property {Number} spacing Gets or sets the distance between adjacent entries in the legend.
    * @property {Boolean} allowMove Gets or sets a value indicating whether users are allowed to move this legend.
    * @property {MindFusion.Charting.Drawing.Brush} background Gets or sets the Brush that should be used to fill the background of this legend.
    * @property {MindFusion.Charting.Drawing.Brush} borderStroke Gets or sets the Brush that should be used to stroke the borders of this legend.
    * @property {Number} borderStrokeThickness Gets or sets the stroke thickness of legend borders.
    * @property {MindFusion.Charting.Drawing.DashStyle} borderStrokeDashStyle Gets or sets the stroke dash style of legend borders.
    * @property {LabelKinds} elementLabelKind Gets or sets the type of label to show for series elements. This property is used only when showSeriesElements is set to true.
    * @property {Boolean} showSeriesElements Gets or sets a value, indicatating whether this legend will display individual series element labels instead of the series titles.
    * @property {Number} maxItemsPerColumn Gets or sets the maximum number ot items per display column.
    */
    class LegendRenderer extends MindFusion.Charting.Components.Component {
        /**
         * Initializes a new instance of the LegendRenderer class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of the LegendController class.
         */
        createController(context: RenderContext): MindFusion.Charting.Components.ComponentController;
        /**
         * Component.Draw override. Draws legend elements in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Gets or sets a list of SeriesRenderer objects whose Series
         * should be displayed in this legend.
         */
        /**
         * Gets or sets a list of SeriesRenderer objects whose Series
         * should be displayed in this legend.
         */
        content: MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>;
        /**
         * Gets or sets the legend's title.
         */
        /**
         * Gets or sets the legend's title.
         */
        title: string;
        /**
         * Gets the Font that should be used to draw the legend's Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveTitleFont(context: RenderContext): MindFusion.Charting.Drawing.Font;
        /**
         * Gets the Brush that should be used to draw the legend's Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveTitleBrush(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw the legend's Title.
         */
        /**
         * Gets or sets the Brush that should be used to draw the legend's Title.
         */
        titleBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font that should be used to draw the legend's Title.
         */
        /**
         * Gets or sets the name of font that should be used to draw the legend's Title.
         */
        titleFontName: string;
        /**
         * Gets or sets the size of font that should be used to draw the legend's Title.
         */
        /**
         * Gets or sets the size of font that should be used to draw the legend's Title.
         */
        titleFontSize: number;
        /**
         * Gets or sets the style of font that should be used to draw the legend's Title.
         */
        /**
         * Gets or sets the style of font that should be used to draw the legend's Title.
         */
        titleFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets a value indicating whether to display the legend title.
         */
        /**
         * Sets a value indicating whether to display the legend title.
         */
        showTitle: boolean;
        /**
         * Gets the padding space between content and borders of this legend.
         */
        /**
         * Sets the padding space between content and borders of this legend.
         */
        padding: number;
        /**
         * Gets the distance between adjacent entries in the legend.
         */
        /**
         * Sets the distance between adjacent entries in the legend.
         */
        spacing: number;
        /**
         * Gets or sets a value indicating whether users are allowed to move this legend.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to move this legend.
         */
        allowMove: boolean;
        /**
         * Gets the Brush that should be used to fill the legend background.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the Pen that should be used to draw the legend borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveBorderPen(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets the Brush that should be used to stroke the legend borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveBorderStroke(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the thickness of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveBorderStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the Brush that should be used to fill the background of this legend.
         */
        /**
         * Gets or sets the Brush that should be used to fill the background of this legend.
         */
        background: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this legend.
         */
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this legend.
         */
        borderStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the stroke thickness of legend borders.
         */
        /**
         * Gets or sets the stroke thickness of legend borders.
         */
        borderStrokeThickness: number;
        /**
         * Gets or sets the stroke dash style of legend borders.
         */
        /**
         * Gets or sets the stroke dash style of legend borders.
         */
        borderStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
        * Gets or sets a value, indicatating whether this legend will display individual
        * series element labels instead of the series titles.
        */
        /**
    * Gets or sets a value, indicatating whether this legend will display individual
    * series element labels instead of the series titles.
    */
        showSeriesElements: boolean;
        /**
        * Gets or sets the type of label to show for series elements.
        * This property is used only when showSeriesElements is set to true.
        */
        /**
        * Gets or sets the type of label to show for series elements.
        * This property is used only when showSeriesElements is set to true.
        */
        elementLabelKind: LabelKinds;
        /**
        * Gets or sets the maximum number ot items per display column.
        */
        /**
    * Gets or sets the maximum number ot items per display column.
    */
        maxItemsPerColumn: number;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws series as polylines.
     */
    class LineRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the LineRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as polylines.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        fromJson(json: string): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Describes rectangular margins.
    * @property {Number} left Gets or sets the width of the left side of the frame.
    * @property {Number} top Gets or sets the width of the top side of the frame.
    * @property {Number} right Gets or sets the width of the right side of the frame.
    * @property {Number} bottom Gets or sets the width of the bottom side of the frame.
    * @property {Number} width Returns the sum of Left and Right margins.
    * @property {Number} height Returns the sum of Top and Bottom margins.
    */
    class Margins {
        /**
         * Initializes a new instance of the Margins structure.
         */
        constructor(left: number, top?: number, right?: number, bottom?: number);
        /**
         * Gets or sets the width of the left side of the frame.
         */
        /**
         * Gets or sets the width of the left side of the frame.
         */
        left: number;
        /**
         * Gets or sets the width of the top side of the frame.
         */
        /**
         * Gets or sets the width of the top side of the frame.
         */
        top: number;
        /**
         * Gets or sets the width of the right side of the frame.
         */
        /**
         * Gets or sets the width of the right side of the frame.
         */
        right: number;
        /**
         * Gets or sets the width of the bottom side of the frame.
         */
        /**
         * Gets or sets the width of the bottom side of the frame.
         */
        bottom: number;
        /**
         * Returns the sum of Left and Right margins.
         */
        width: number;
        /**
         * Returns the sum of Top and Bottom margins.
         */
        height: number;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Defines appearance attributes of series elements.
     */
    interface SeriesStyle {
        /**
         * Returns a Brush that should be used to fill specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Returns a Brush that should be used to stroke specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Returns the thickness of the stroke used to draw specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Returns the dash style of the stroke used to draw specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Implements SeriesStyle using mixed per-element and uniform values for attributes.
    * @property {MindFusion.Charting.Drawing.Brush} uniformFill Gets or sets a Brush used to fill all elements of all series uniformly.
    * @property {MindFusion.Charting.Drawing.Brush} uniformStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
    * @property {Number} uniformStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
    * @property {MindFusion.Charting.Drawing.DashStyle} uniformStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
    * @property {MindFusion.Charting.Collections.List<Brush>} commonFills Gets or sets a list of brushes, each Brush used to fill all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Brush>} commonStrokes Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
    * @property {Number} commonStrokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
    * @property {MindFusion.Charting.Drawing.DashStyle} commonStrokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} fills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} strokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<number>>} strokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} strokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
    */
    class MixedSeriesStyle implements SeriesStyle {
        /**
             * Initializes a new instance of the MixedSeriesStyle class.
             * @param {MindFusion.Charting.Drawing.Brush} [fill] A Brush used to fill all series elements.
             * @param {MindFusion.Charting.Drawing.Brush} [stroke] A Brush used to stroke all series elements.
             * @param {Number} [strokeThickness] Uniform thickness of series elements' strokes.
             * @param {MindFusion.Charting.Drawing.DashStyle} [strokeDashStyle] Uniform dash style of series elements' strokes.
             */
        constructor(fill?: MindFusion.Charting.Drawing.Brush, stroke?: MindFusion.Charting.Drawing.Brush, strokeThickness?: number, strokeDashStyle?: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush instance from
         * Fills, CommonFills or UniformFill properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush instance from
         * Strokes, CommonStrokes or UniformStroke properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * StrokeThicknesses, CommonStrokeThicknesses or UniformStrokeThickness properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * StrokeDashStyles, CommonStrokeDashStyles or UniformStrokeDashStyle properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        uniformFill: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        uniformStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        uniformStrokeThickness: number;
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        uniformStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        commonFills: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        commonStrokes: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        commonStrokeThicknesses: MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        commonStrokeDashStyles: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        fills: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        strokes: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        strokeThicknesses: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>;
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        strokeDashStyles: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Contains two values.
    * @property {T1} first Gets or sets the first value.
    * @property {T1} second Gets or sets the second value.
    */
    class Pair<T1, T2> {
        /**
         * Initializes a new instance of the Pair class.
         * @param first The first value.
         * @param second The second value.
         */
        constructor(first?: T1, second?: T2);
        /**
         * Object.ToString override.
         * @return A string representation of the pair.
         */
        toString(): string;
        /**
         * Gets or sets the first value.
         */
        /**
         * Gets or sets the first value.
         */
        first: T1;
        /**
         * Gets or sets the second value.
         */
        /**
         * Gets or sets the second value.
         */
        second: T2;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * Represents a controller that pans its plot's data range.
     */
    class PanControllerAnimation implements MindFusion.Charting.Components.ComponentAnimation {
        constructor(controller: PanController, dir: Vector);
        start(): void;
        stop(): void;
        setFriction: number;
        getFriction: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A base class for controllers that let users interact with Plot2D objects.
    * @property {Boolean} vertical Gets or sets a value indicating whether interaction is done along the X or Y axis.
    * @property {Dictionary<Axis, AxisInfo>} axisRanges Contains information about Axis ranges processed by this controller.
    */
    class Plot2DController extends PlotController {
        /**
         * Initializes a new instance of the Plot2DController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        recalculate(): void;
        /**
         * PlotController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Converts a plot pixel position to a logical value from specified axis' coordinate system.
         * @param {MindFusion.Charting.Axis} axis The target Axis.
         * @param {Number} value The value to convert.
         * @returns {Number} The converted value.
         */
        plotToAxisValue(axis: Axis, value: number): number;
        /**
         * Gets or sets a value indicating whether interaction is done along the X or Y axis.
         */
        /**
         * Gets or sets a value indicating whether interaction is done along the X or Y axis.
         */
        vertical: boolean;
        /**
        * Contains information about Axis ranges processed by this controller.
        */
        axisRanges: MindFusion.Charting.Collections.Dictionary<Axis, AxisInfo>;
    }
    /**
    * @class Stores information about Axis ranges processed by this controller.
    * @property {Number} resolution The axis resolution.
    * @property {Number} origin The axis origin.
    * @property {Number} range The axis range.
    */
    class AxisInfo {
        /**
        * The axis resolution.
        * @type {Number}
        */
        resolution: number;
        /**
        * The axis origin.
        * @type {Number}
        */
        origin: number;
        /**
        * The axis range.
        * @type {Number}
        */
        range: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a controller that pans its plot's data range.
    * @property {Boolean} enableAnimation Gets or sets whether to enable pan inertia.
    */
    class PanController extends Plot2DController {
        /**
         * Initializes a new instance of the PanController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        /**
         * Plot2DController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        update(dvalue: Vector): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): MindFusion.Charting.Components.ComponentAnimation;
        /**
         * Gets or sets whether to enable pan inertia.
         */
        /**
         * Gets or sets whether to enable pan inertia.
         */
        enableAnimation: boolean;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Implements SeriesStyle using different attributes for each data item.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} fills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} strokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<number>>} strokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} strokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
    */
    class PerElementSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of PerElementSeriesStyle.
         * @param {MindFusion.Charting.Collections.List<List<Brush>>} [fills]
         * A list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<Brush>>} [strokes]
         * A list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<Number>>} [strokeThicknesses]
         * A list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<DashStyle>>} [strokeDashStyles]
         * A list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         *
         */
        constructor(fills?: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>, strokes?: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>, strokeThicknesses?: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>, strokeDashStyles?: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>);
        /**
         * Implements SeriesStyle.Fill. Returns a Brush from the Fills list
         * that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush from the Strokes list
         * that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * the StrokeThicknesses list that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * the StrokeDashStyles list that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        fills: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        strokes: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        strokeThicknesses: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>;
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        strokeDashStyles: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Implements SeriesStyle using a different set of attributes for each series,
    * where all elements in a single series have common appearance.
    * @property {MindFusion.Charting.Collections.List<Brush>} fills Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Brush>} strokes Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Number>} strokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
    * @property {MindFusion.Charting.Collections.List<DashStyle>} strokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
    */
    class PerSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of the PerSeriesStyle class.
         * @param {MindFusion.Charting.Collections.List<Brush>} [fills] A list of Brushes, each Brush used to fill all elements of a series.
         * @param {MindFusion.Charting.Collections.List<Brush>} [strokes] A list of Brushes, each Brush used to stroke all elements of a series.
         * @param {MindFusion.Charting.Collections.List<Number>} [strokeThicknesses] A list of stroke thicknesses, each thickness applied to all elements of a series.
         * @param {MindFusion.Charting.Collections.List<DashStyle>} [strokeDashStyles] A list of dash styles, each style applied to all elements of a series.
         */
        constructor(fills?: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>, strokes?: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>, strokeThicknesses?: MindFusion.Charting.Collections.List<number>, strokeDashStyles?: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>);
        /**
         * Implements SeriesStyle.Fill. Returns a Brush from
         * the Fills list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush from
         * the Strokes list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * the StrokeThicknesses list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * the StrokeDashStyles list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
         */
        /**
         * Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
         */
        fills: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
         */
        /**
         * Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
         */
        strokes: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        strokeThicknesses: MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        strokeDashStyles: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws pies in its containing plot.
    * @property {Series} series Gets or sets the Series drawn by this PieRenderer.
    * @property {Number} dimension Gets or sets the dimension index that should be used to read data from the Series.
    */
    class PieRenderer extends SeriesRenderer {
        /**
         * Initializes a new instance of the PieRenderer class.
         * @param {Series} series The Series that should be rendered as a pie.
         * @param {Number} [dimension] Specifies the Series dimension index that should be used to access data.
         */
        constructor(series: Series, dimension?: number);
        /**
         * Gets or sets the Series drawn by this PieRenderer.
         */
        /**
         * Gets or sets the Series drawn by this PieRenderer.
         */
        series: Series;
        /**
         * Enumerates the slices of the pie.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessSlice} process A ProcessBars callback.
         * @remarks The signature of the ProcessSlice delegate is as follows:
         * 'function(dataIndex, rect, diameter, startAngle, sweepAngle)'.
         * param {Number} dataIndex An integer index of data item in Series.
         * param {MindFusion.Drawing.Rect} rect The bounding rectangle of the slice' circle.
         * param {Number} diameter The diameter of the pie.
         * param {Number} startAngle The start angle of the slice' sector.
         * param {Number} sweepAngle The sweep angle of the slice' sector.
         * The method is not expected to return a value.
         */
        enumSlices(context: RenderContext, process: ProcessSlice): void;
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        dimension: number;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the slices representing data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a pie slice.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Implements the SeriesContainer interface.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        fromJson(json: string): any;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process pie slices.
    * @param {Number} dataIndex An integer index of data item in Series.
    * @param {MindFusion.Drawing.Rect} rect The bounding rectangle of the slice' circle.
    * @param {Number} diameter The diameter of the pie.
    * @param {Number} startAngle The start angle of the slice' sector.
    * @param {Number} sweepAngle The sweep angle of the slice' sector.
    */
    interface ProcessSlice {
        (dataIndex: number, rect: MindFusion.Drawing.Rect, diameter: number, startAngle: number, sweepAngle: number): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents one-dimensional series defined by e list of data values and lists of
    * inner and outer labels, convenient for providing data to PieRenderer.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns a combination of InnerLabel and OuterLabel.
    * @property {MindFusion.Charting.Collections.List<String>} outerLabels Gets or sets the outer labels.
    * @property {MindFusion.Charting.Collections.List<String>} innerLabels Gets or sets the inner labels.
    * @property {MindFusion.Charting.Collections.List<Number>} detachedSlices Gets or sets indices of detached slices.
    */
    class PieSeries extends SimpleSeries {
        /**
         * Initializes a new instance of the PieSeries class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} innerLabels A list of inner labels.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} outerLabels A list of outer labels.
         */
        constructor(values: MindFusion.Charting.Collections.List<number> | Array<number>, innerLabels: MindFusion.Charting.Collections.List<string> | Array<string>, outerLabels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * SimpleSeries.GetLabel override. Returns an element of the inner or outer label lists.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Gets or sets the outer labels.
         */
        /**
         * Gets or sets the outer labels.
         */
        outerLabels: MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the inner labels.
         */
        /**
         * Gets or sets the inner labels.
         */
        innerLabels: MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets indices of emphasized data items. PieRenderer draws
         * their corresponding slices as pulled out of the pie.
         */
        /**
         * Gets or sets indices of emphasized data items. PieRenderer draws
         * their corresponding slices as pulled out of the pie.
         */
        detachedSlices: MindFusion.Charting.Collections.List<number>;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class The base class for components used to draw chart graphics.
    * @property {SeriesStyle} seriesStyle Gets or sets a SeriesStyle whose attributes should be used to draw series inside this plot, unless their own renderers have a local SeriesStyle value set for respetive attribute.
    * @property {MindFusion.Charting.HitResult} highlightedItem Gets or sets the data item that should be drawn highlighted.
    * @property {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} seriesRenderers Gets or sets the SeriesRenderer objects that should draw inside this plot.
    * @property {MindFusion.Charting.Drawing.Brush} background Gets or sets the Brush that should be used to fill the background of this plot.
    * @property {MindFusion.Charting.Drawing.Brush} borderStroke Gets or sets the Brush that should be used to stroke the borders of this plot.
    * @property {Number} borderStrokeThickness Gets or sets the stroke thickness of plot borders.
    * @property {MindFusion.Charting.Drawing.DashStyle} borderStrokeDashStyle Gets or sets the stroke dash style of plot borders.
    * @property {MindFusion.Charting.Drawing.Brush} highlightStroke Gets or sets the Brush used to stroke highlighted item.
    * @property {Number} highlightStrokeThickness Gets or sets the stroke thickness of highlighted item.
    * @property {MindFusion.Charting.Drawing.DashStyle} highlightStrokeDashStyle Gets or sets the stroke dash style of highlighted item.
    */
    class Plot extends MindFusion.Charting.Components.Component implements SeriesContainer {
        /**
         * Gets or sets a SeriesStyle whose attributes should be used to
         * draw series inside this plot, unless their own renderers
         * have a local SeriesStyle value set for respetive attribute.
         */
        /**
         * Gets or sets a SeriesStyle whose attributes should be used to
         * draw series inside this plot, unless their own renderers
         * have a local SeriesStyle value set for respetive attribute.
         */
        seriesStyle: SeriesStyle;
        /**
         * Gets or sets the data item that should be drawn highlighted.
         */
        /**
         * Gets or sets the data item that should be drawn highlighted.
         */
        highlightedItem: HitResult;
        /**
         * Called in the beginning of data measurement pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        /**
         * Measures data of all SeriesRenderer objects drawn inside this plot.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRanges(context: RenderContext): void;
        /**
         * Called at the end of data measurement pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRanges(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws a grid and all chart graphics
         * represented by contained SeriesRenderer objects.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Draws the plot's background and borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawPlot(context: RenderContext): void;
        /**
         * Draws the plot's grid.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawGrid(context: RenderContext): void;
        /**
         * Gets or sets the SeriesRenderer objects that should draw inside this plot.
         */
        /**
         * Gets or sets the SeriesRenderer objects that should draw inside this plot.
         */
        seriesRenderers: MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>;
        /**
         * Unsubscribes from DataChanged and PropertyChanged events
         * of all SeriesRenderer objects in specified list.
         * @param {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} seriesRenderers A list of SeriesRenderer objects.
         */
        /**
         * Called when a Series raises its DataChanged event.
         * @param {Object} sender The event sender.
         * @param {EventArgs} e An EventArgs instance.
         */
        onRendererDataChanged(e: MindFusion.EventArgs): void;
        /**
         * Implements SeriesContainer.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
        * Implements the SeriesContainer interface. Gets the index of the dimension
        * whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
        /**
         * Gets the Brush that should be used to fill the plot's background.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the Pen that should be used to draw the plot's borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveBorder(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets the Brush that should be used to stroke the plot's borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveBorderStroke(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the thickness of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveBorderStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the Brush that should be used to fill the background of this plot.
         */
        /**
         * Gets or sets the Brush that should be used to fill the background of this plot.
         */
        background: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this plot.
         */
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this plot.
         */
        borderStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the stroke thickness of plot borders.
         */
        /**
         * Gets or sets the stroke thickness of plot borders.
         */
        borderStrokeThickness: number;
        /**
         * Gets or sets the stroke dash style of plot borders.
         */
        /**
         * Gets or sets the stroke dash style of plot borders.
         */
        borderStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the Brush used to stroke highlighted item.
         */
        /**
         * Gets or sets the Brush used to stroke highlighted item.
         */
        highlightStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the stroke thickness of highlighted item.
         */
        /**
         * Gets or sets the stroke thickness of highlighted item.
         */
        highlightStrokeThickness: number;
        /**
         * Gets or sets the stroke dash style of highlighted item.
         */
        /**
         * Gets or sets the stroke dash style of highlighted item.
         */
        highlightStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        effectiveHighlight(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        effectiveHighlightStroke(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        effectiveHighlightStrokeThickness(context: RenderContext): number;
        effectiveHighlightDashStyle(context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A plot whose series are rendered relatively to a two-dimensional Cartesian coordinate system.
    * @property {MindFusion.Charting.Axis} xAxis Gets or sets default Axis instance used to map X data coordinates of series rendered inside this plot to the plot's pixels.
    * @property {MindFusion.Charting.Axis} yAxis Gets or sets default Axis instance used to map Y data coordinates of series rendered inside this plot to the plot's pixels.
    * @property {GridType} gridType Gets or sets the type of grid to draw in this plot.
    * @property {Boolean} pinGrid Gets or sets a value indicating whether grid stripes should be pinned in place or scroll together with the plot when users pan it.
    * @property {Boolean} isZoomed Gets or sets a value indicating whether the user has zoomed into this plot.
    * @property {Boolean} allowPan Gets or sets a value indicating whether users are allowed to pan this plot.
    * @property {Boolean} verticalScroll Specifies whether the plot should scroll vertically when panned.
    * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of the grid.
    * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of the grid.
    */
    class Plot2D extends Plot {
        /**
         * Initializes a new instance of the Plot2D class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the PanController class.
         */
        createController(context: RenderContext): MindFusion.Charting.Components.ComponentController;
        getDelta(): number;
        /**
         * Raised when the user zooms into this plot's data range.
         * @event Plot2D.zoomChanged
         * @type {EventDispatcher}
         * @property {Plot2D} sender
         * @property {EventArgs} args
         */
        zoomChanged: MindFusion.Charting.Common.EventDispatcher<EventArgs>;
        xAxes(renderContext: RenderContext): MindFusion.Charting.Collections.IEnumerable<Axis>;
        yAxes(renderContext: RenderContext): MindFusion.Charting.Collections.IEnumerable<Axis>;
        /**
         * Gets or sets default Axis instance used to map X data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        /**
         * Gets or sets default Axis instance used to map X data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        xAxis: Axis;
        /**
         * Gets or sets default Axis instance used to map Y data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        /**
         * Gets or sets default Axis instance used to map Y data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        yAxis: Axis;
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        gridType: GridType;
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        pinGrid: boolean;
        /**
         * Component.Visit override. Calls visitor's VisitPlot method.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: MindFusion.Charting.Components.ComponentVisitor): void;
        /**
         * Plot.DrawGrid override. Draws the grid specified by GridType property.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawGrid(context: RenderContext): void;
        /**
         * Zooms out from current data range.
         * @param {IEnumerable<Axis>} axes The axes whose ranges should be scaled.
         */
        zoomOut(axes: MindFusion.Charting.Collections.IEnumerable<Axis>): void;
        /**
         * Resets the zoom level to original axis ranges.
         */
        resetZoom(): void;
        /**
         * Gets or sets a value indicating whether the user has zoomed into this plot.
         */
        isZoomed: boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to pan this plot.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to pan this plot.
         */
        allowPan: boolean;
        /**
         * Specifies whether the plot should scroll vertically when panned.
         */
        /**
         * Specifies whether the plot should scroll vertically when panned.
         */
        verticalScroll: boolean;
        /**
         * Gets or sets the main color of the grid.
         */
        /**
         * Gets or sets the main color of the grid.
         */
        gridColor1: MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the alternating color of the grid.
         */
        /**
         * Gets or sets the alternating color of the grid.
         */
        gridColor2: MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the color of the grid lines.
         */
        /**
         * Gets or sets the color of the grid lines.
         */
        gridLineColor: MindFusion.Charting.Drawing.Color;
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        gridLineThickness: number;
        /**
        * Gets or sets the style of plot grid lines.
        */
        /**
        * Gets or sets the style of plot grid lines.
        */
        gridLineStyle: MindFusion.Charting.Drawing.DashStyle;
        zoomHistory: ZoomHistory;
        fromJson(json: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a data series defined by a list of Point objects.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Points list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Point>} points Gets or sets the series' points.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class PointSeries implements Series {
        /**
         * Initializes a new instance of the PointSeries class.
         * @param {MindFusion.Charting.Collections.List<Point> | Array<Point>} points A list of points.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} labels A list of labels.
         */
        constructor(points: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point> | Array<MindFusion.Drawing.Point>, labels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * Implements Series.GetValue. Returns a coordinate of specified point in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. PointSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. PointSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Points list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        dimensions: number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the series' points.
         */
        /**
         * Gets or sets the series' points.
         */
        points: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>;
        /**
         * Gets or sets the data labels.
         */
        /**
         * Gets or sets the data labels.
         */
        labels: MindFusion.Charting.Collections.List<string>;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;
        /**
         * Raised when the values in this series change.
         * @event PointSeries.dataChanged
         * @type {EventDispatcher}
         * @property {PointSeries} sender
         * @property {EventArgs} args
         */
        dataChanged: Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            points: MindFusion.Drawing.Point[];
            labels: string[];
            title: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A plot used to draw graphics in polar coordinate system.
    * @property {Number} padding Gets or set padding space between the plot's border and series graphics.
    * @property {Number} startAngle Gets or set the angle where first data item of series should be drawn.
    * @property {Boolean} allowRotate Gets or sets a value indicating whether users are allowed to rotate this plot.
    */
    class PolarPlot extends Plot {
        /**
         * Initializes a new instance of the PolarPlot class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the RotationController class.
         */
        createController(context: RenderContext): MindFusion.Charting.Components.ComponentController;
        /**
         * Component.Visit override. Calls visitor's VisitPlot method.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: MindFusion.Charting.Components.ComponentVisitor): void;
        /**
         * Rotates point around specified rotation center at specified angle.
         * @param {MindFusion.Drawing.Point} pointToRotate The point to rotate.
         * @param {MindFusion.Drawing.Point} centerPoint The rotation center.
         * @param {Number} angleInDegrees The rotation angle.
         * @returns {MindFusion.Drawing.Point}
         */
        rotatePoint(pointToRotate: MindFusion.Drawing.Point, centerPoint: MindFusion.Drawing.Point, angleInDegrees: number): MindFusion.Drawing.Point;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        padding: number;
        /**
         * Gets or set the angle where first data item of series should be drawn.
         */
        /**
         * Gets or set the angle where first data item of series should be drawn.
         */
        startAngle: number;
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this plot.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this plot.
         */
        allowRotate: boolean;
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Provides contextual information about the dashboard to its child components
    * when calling their draw, layout and user input methods.
    * @property {MindFusion.Charting.Drawing.Graphics} graphics Gets or sets the current drawing surface.
    * @property {Component} component Gets or sets the component currently being painted.
    * @property {MindFusion.Charting.Axis} xAxis Gets the chart's XAxis.
    * @property {MindFusion.Charting.Axis} yAxis Gets the chart's YAxis.
    * @property {Theme} theme Gets or sets the Theme used to resolve appearance attributes.
    */
    class RenderContext {
        /**
         * Initializes a new instance of the RenderContext clas.
         * @param {Rect} clipRect A Rect specifying the clip rectangle.
         * @param {Theme} theme A Theme instance where appearance attributes should be derived from.
         */
        constructor(clipRect: MindFusion.Drawing.Rect, theme: Theme);
        /**
         * Gets or sets the current drawing surface.
         */
        /**
         * Gets or sets the current drawing surface.
         */
        graphics: MindFusion.Charting.Drawing.Graphics;
        /**
         * Gets or sets the component currently being painted.
         */
        /**
         * Gets or sets the component currently being painted.
         */
        component: MindFusion.Charting.Components.Component;
        /**
         * Gets the X axis assigned to a Renderer2D or returns one from parent plot or chart.
         * @param {Renderer2D} [series] A Renderer2D instance.
         * @returns {Axis} An Axis instance.
         */
        getXAxis(series?: Renderer2D): Axis;
        /**
         * Gets the Y axis assigned to a Renderer2D or returns one from parent plot or chart.
         * @param {Renderer2D} [series] A Renderer2D instance.
         * @returns {Axis} An Axis instance.
         */
        getYAxis(series?: Renderer2D): Axis;
        /**
         * Gets the chart's XAxis.
         */
        xAxis: Axis;
        /**
         * Gets the chart's YAxis.
         */
        yAxis: Axis;
        /**
         * Gets or sets the Theme used to resolve appearance attributes.
         */
        /**
         * Gets or sets the Theme used to resolve appearance attributes.
         */
        theme: Theme;
        clipRect: MindFusion.Drawing.Rect;
        /**
         * Gets the clip rectangle relative to specified Component.
         * @param {Component} relativeTo A Component instance.
         * @returns {Rect} A Rect instance.
         */
        getClipRect(relativeTo: MindFusion.Charting.Components.Component): MindFusion.Drawing.Rect;
        /**
         * Gets a TextStyle from current Theme.
         * @param {TextStyleHint} hint A member of the TextStyleHint enumeration.
         * @returns {TextStyle} A TextStyle instance.
         */
        textStyle(hint: TextStyleHint): TextStyle;
        highlightPen(): MindFusion.Charting.Drawing.Pen;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Provides contextual information about the dashboard to its child components
    * when calling their draw, layout and user input methods.
    * @property {MindFusion.Charting.Axis} xAxis Gets the chart's XAxis.
    * @property {MindFusion.Charting.Axis} yAxis Gets the chart's YAxis.
    * @property {BiaxialChart} chart Gets the chart.
    */
    class RenderContext2D extends RenderContext {
        /**
         * Initializes a new instance of the RenderContext clas.
         * @param clipRect A RectD specifying the clip rectangle.
         * @param theme A Theme instance where appearance attributes should be derived from.
         */
        constructor(chart: MindFusion.Charting.Controls.BiaxialChart, clipRect: MindFusion.Drawing.Rect);
        xAxis: Axis;
        yAxis: Axis;
        chart: MindFusion.Charting.Controls.BiaxialChart;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * Represents a controller that rotates a polar plot by changing its StartAngle.
     */
    class RotationControllerAnimation implements MindFusion.Charting.Components.ComponentAnimation {
        constructor(controller: RotationController, dir: number, originPoint: MindFusion.Drawing.Point, endPoint: MindFusion.Drawing.Point);
        start(): void;
        stop(): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a controller that rotates a polar plot by changing its StartAngle.
    * @property {Boolean} enableAnimation Gets or sets whether to enable rotation inertia.
    */
    class RotationController extends PlotController {
        /**
         * Initializes a new instance of the RotationController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * PlotController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        update(dangle: number): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): MindFusion.Charting.Components.ComponentAnimation;
        /**
         * Gets or sets whether to enable rotation inertia.
         */
        /**
         * Gets or sets whether to enable rotation inertia.
         */
        enableAnimation: boolean;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws scatter in its containing plot.
    * @property {ScatterType} shape Gets or sets the type of scatter shapes.
    * @property {Number} shapeSize Gets or sets the size of scatter shapes.
    */
    class ScatterRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the ScatterRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as scatter.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumPoints(context: RenderContext, process: ProcessPoint): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the scatter representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted shape in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * Gets or sets the size of scatter shapes.
         */
        /**
         * Gets or sets the size of scatter shapes.
         */
        shapeSize: number;
        /**
         * Gets or sets the type of scatter shapes.
         */
        /**
         * Gets or sets the type of scatter shapes.
         */
        shape: ScatterType;
        drawIn3DPlot(): boolean;
        fromJson(json: string): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies the shapes rendered by a ScatterRenderer.
    * @enum
    * @name ScatterType
    * @param [None] Do not draw scatter.
    * @param [Circle] Draw circles.
    * @param [Diamond] Draw diamonds.
    * @param [Square] Draw squares.
    * @param [Triangle] Draw triangles.
    */
    enum ScatterType {
        /**
        * Do not draw scatter.
        */
        None = 0,
        /**
        * Draw circles.
        */
        Circle = 1,
        /**
        * Draw diamonds.
        */
        Diamond = 2,
        /**
        * Draw squares.
        */
        Square = 3,
        /**
        * Draw triangles.
        */
        Triangle = 4,
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a data series defined by two lists of values containing
    * respectively X and Y coordinates.
    * @property {Number} size Implements Series.Size. Returns the number of elements in XData list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Gets or sets the kind of labels reported as supported by this series.
    * @property {MindFusion.Charting.Collections.List<Number>} xData Gets or sets the X coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<Number>} yData Gets or sets the Y coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class Series2D implements Series {
        /**
         * Initializes a new instance of the Series2D class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} xValues A list of X coordinates.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} yValues A list of Y coordinates.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} labels A list of labels.
         */
        constructor(xValues: MindFusion.Charting.Collections.List<number> | Array<number>, yValues: MindFusion.Charting.Collections.List<number> | Array<number>, labels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. Series2D always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. Series2D always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in XData list.
         */
        size: number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        dimensions: number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the kind of labels
         * reported as supported by this series.
         */
        /**
         * Implements Series.SupportedLabels. Gets or sets the kind of labels
         * reported as supported by this series.
         */
        supportedLabels: LabelKinds;
        /**
         * Gets or sets the X coordinates of data items.
         */
        /**
         * Gets or sets the X coordinates of data items.
         */
        xData: MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets the Y coordinates of data items.
         */
        /**
         * Gets or sets the Y coordinates of data items.
         */
        yData: MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets the data labels.
         */
        /**
         * Gets or sets the data labels.
         */
        labels: MindFusion.Charting.Collections.List<string>;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        title: string;
        /**
         * Raised when the values in this series change.
         * @event Series2D.dataChanged
         * @type {EventDispatcher}
         * @property {Series2D} sender
         * @property {EventArgs} args
         */
        dataChanged: Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            xValues: number[];
            yValues: number[];
            labels: string[];
            title: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Draws text and labels inside chart components.
    * @property {MindFusion.Drawing.Font} labelFont Gets or sets the Font used to draw labels.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets the brush used to draw labels.
    */
    class TextRenderer {
        /**
         * Initializes a new instance of the TextRenderer class.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Font} font A Font instance.
         * @param {MindFusion.Charting.Drawing.Brush} textBrush A Brush instance.
         */
        constructor(context: RenderContext, font: MindFusion.Charting.Drawing.Font, textBrush: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the font used to draw labels.
         */
        /**
         * Gets or sets the font used to draw labels.
         */
        labelFont: MindFusion.Charting.Drawing.Font;
        /**
         * Gets or sets the brush used to draw labels.
         */
        /**
         * Gets or sets the brush used to draw labels.
         */
        textBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Draws the specified label centered at specified location.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Point} point A Point specifying the label's location.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] A StringFormat instance.
         */
        drawLabelAtPoint(series: Series, index: number, point: MindFusion.Drawing.Point, labelKind: LabelKinds, format?: MindFusion.Charting.Drawing.StringFormat): void;
        drawLabelAtRadialPoint(label: string, center: MindFusion.Drawing.Point, radius: number, angle: number): void;
        /**
         * Draws the specified label on the right side of specified point.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Point} point A Point specifying the label's location.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         */
        drawRightFromPoint(series: Series, index: number, point: MindFusion.Drawing.Point, labelKind: LabelKinds): void;
        /**
         * Draws a 90-degree rotated text in specified layout rectangle.
         * @param {String} text A string containing the text to draw.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.Drawing.Brush} textBrush A Brush instance.
         * @param {MindFusion.Charting.Drawing.StringAlignment} alignment A member of the StringAlignment enumeration.
         */
        drawRotatedLabelInRect(text: string, bounds: MindFusion.Drawing.Rect, textBrush: MindFusion.Charting.Drawing.Brush, alignment: MindFusion.Charting.Drawing.StringAlignment): void;
        /**
         * Draws the specified label rotated at 90 degrees in specified layout rectangle.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         */
        drawRotatedLabelInRect(series: Series, index: number, bounds: MindFusion.Drawing.Rect, labelKind: LabelKinds): void;
        /**
         * Draws the specified label in specified layout rectangle.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] A StringFormat instance.
         */
        drawLabelInRect(series: Series, index: number, bounds: MindFusion.Drawing.Rect, labelKind: LabelKinds, format?: MindFusion.Charting.Drawing.StringFormat): void;
        measureLabel(label: string, angle: number): MindFusion.Drawing.Size;
        drawRotatedLabel(text: string, center: MindFusion.Drawing.Point, angle: number): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Defines text appearance attributes.
    * @property {String} fontName Gets or sets font name.
    * @property {Number} fontSize Gets or sets font size.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets font style.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets a Brush used to draw text.
    */
    class TextStyle {
        /**
         * Initializes a new instance of the TextStyle class.
         */
        constructor();
        /**
         * Gets or sets font name.
         */
        /**
         * Gets or sets font name.
         */
        fontName: string;
        /**
         * Gets or sets font size.
         */
        /**
         * Gets or sets font size.
         */
        fontSize: number;
        /**
         * Gets or sets font style.
         */
        /**
         * Gets or sets font style.
         */
        fontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets a Brush used to draw text.
         */
        /**
         * Gets or sets a Brush used to draw text.
         */
        textBrush: MindFusion.Charting.Drawing.Brush;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies text styles that can be accessed through RenderContent.
    * @enum
    * @name TextStyleHint
    * @param [Title] Identifies style used to draw chart's title.
    * @param [Subtitle] Identifies style used to draw chart's sub-title.
    * @param [AxisLabels] Identifies style used to draw axis labels.
    * @param [AxisTitle] Identifies style used to draw axis title.
    * @param [DataLabels] Identifies style used to draw data labels.
    * @param [Widget] Identifies style used to draw text in UI widgets.
    * @param [LegendTitle] Identifies style used to draw legend title.
    */
    enum TextStyleHint {
        /**
         * Identifies style used to draw chart's title.
         */
        Title = 0,
        /**
         * Identifies style used to draw chart's sub-title.
         */
        Subtitle = 1,
        /**
         * Identifies style used to draw axis labels.
         */
        AxisLabels = 2,
        /**
         * Identifies style used to draw axis title.
         */
        AxisTitle = 3,
        /**
         * Identifies style used to draw data labels.
         */
        DataLabels = 4,
        /**
         * Identifies style used to draw text in UI widgets.
         */
        Widget = 5,
        /**
         * Identifies style used to draw legend title.
         */
        LegendTitle = 6,
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Represents a dashboard's theme defining all appearance attributes of its elements.
     * @property {String} titleFontName Gets or sets the name of font used to draw the chart title.
     * @property {Number} titleFontSize Gets or sets the size of font used to draw the chart title.
     * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font used to draw the chart title.
     * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush used to draw the chart title.
     * @property {String} subtitleFontName Gets or sets the name of font used to draw the chart sub-title.
     * @property {Number} subtitleFontSize Gets or sets the size of font used to draw the chart sub-title.
     * @property {MindFusion.Charting.Drawing.FontStyle} subtitleFontStyle Gets or sets the style of font used to draw the chart sub-title.
     * @property {MindFusion.Charting.Drawing.Brush} subtitleBrush Gets or sets the Brush used to draw the chart sub-title.
     * @property {String} axisLabelsFontName Gets or sets the name of font used to draw axis labels.
     * @property {Number} axisLabelsFontSize Gets or sets the size of font used to draw axis labels.
     * @property {MindFusion.Charting.Drawing.FontStyle} axisLabelsFontStyle Gets or sets the style of font used to draw axis labels.
     * @property {MindFusion.Charting.Drawing.Brush} axisLabelsBrush Gets or sets the Brush used to draw axis labels.
     * @property {String} axisTitleFontName Gets or sets the name of font used to draw axis titles.
     * @property {Number} axisTitleFontSize Gets or sets the size of font used to draw axis titles.
     * @property {MindFusion.Charting.Drawing.FontStyle} axisTitleFontStyle Gets or sets the style of font used to draw axis titles.
     * @property {MindFusion.Charting.Drawing.Brush} axisTitleBrush Gets or sets the Brush used to draw axis titles.
     * @property {String} dataLabelsFontName Gets or sets the name of font used to draw data labels.
     * @property {Number} dataLabelsFontSize Gets or sets the size of font used to draw data labels.
     * @property {MindFusion.Charting.Drawing.FontStyle} dataLabelsFontStyle Gets or sets the style of font used to draw data labels.
     * @property {MindFusion.Charting.Drawing.Brush} dataLabelsBrush Gets or sets the Brush used to draw data labels.
     * @property {String} widgetFontName Gets or sets the name of font used to draw text in UI widgets.
     * @property {Number} widgetFontSize Gets or sets the size of font used to draw text in UI widgets.
     * @property {MindFusion.Charting.Drawing.FontStyle} widgetFontStyle Gets or sets the style of font used to draw text in UI widgets.
     * @property {MindFusion.Charting.Drawing.Brush} widgetBrush Gets or sets the Brush used to draw text in UI widgets.
     * @property {String} legendTitleFontName Gets or sets the name of font used to draw legend titles.
     * @property {Number} legendTitleFontSize Gets or sets the size of font used to draw legend titles.
     * @property {MindFusion.Charting.Drawing.FontStyle} legendTitleFontStyle Gets or sets the style of font used to draw legend titles.
     * @property {MindFusion.Charting.Drawing.Brush} legendLabelsBrush Gets or sets the Brush used to draw legend labels.
     * @property {MindFusion.Charting.Drawing.Brush} uniformSeriesFill Gets or sets a Brush used to fill all elements of all series uniformly.
     * @property {MindFusion.Charting.Drawing.Brush} uniformSeriesStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
     * @property {Number} uniformSeriesStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
     * @property {MindFusion.Charting.Drawing.DashStyle} uniformSeriesStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
     * @property {MindFusion.Charting.Collections.List<Brush>} commonSeriesFills Gets or sets a list of brushes, each Brush used to fill all elements of a series.
     * @property {MindFusion.Charting.Collections.List<Brush>} commonSeriesStrokes Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
     * @property {MindFusion.Charting.Collections.List<Number>} commonSeriesStrokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
     * @property {MindFusion.Charting.Collections.List<DashStyle>} commonSeriesStrokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<Brush>>} seriesFills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<Brush>>} seriesStrokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<number>>} seriesStrokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} seriesStrokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
     * @property {MindFusion.Charting.Drawing.Brush} plotBackground Gets or sets a Brush used to draw the background of plots.
     * @property {MindFusion.Charting.Drawing.Brush} plotBorderStroke Gets or sets a Brush used to stroke plot borders.
     * @property {Number} plotBorderStrokeThickness Gets or sets the thickness of plot borders.
     * @property {MindFusion.Charting.Drawing.DashStyle} plotBorderStrokeDashStyle Gets or sets the thickness of plot borders.
     * @property {MindFusion.Charting.Drawing.Brush} legendBackground Gets or sets a Brush used to draw legend background.
     * @property {MindFusion.Charting.Drawing.Brush} highlightStroke Gets or sets a Brush used to stroke highlighted items.
     * @property {Number} highlightStrokeThickness Gets or sets the thickness of highlight strokes.
     * @property {MindFusion.Charting.Drawing.DashStyle} highlightStrokeDashStyle Gets or sets the dash style of highlight strokes.
     * @property {MindFusion.Charting.Drawing.Brush} axisStroke Gets or sets a Brush used to stroke axis lines.
     * @property {Number} axisStrokeThickness Gets or sets the thickness of axis lines.
     * @property {MindFusion.Charting.Drawing.DashStyle} axisStrokeDashStyle Gets or sets the dash style of axis lines.
     * @property {MindFusion.Charting.Drawing.Brush} legendBorderStroke Gets or sets a Brush used to draw legend borders.
     * @property {Number} legendBorderStrokeThickness Gets or sets the thickness of legend borders.
     * @property {MindFusion.Charting.Drawing.DashStyle} legendBorderStrokeDashStyle Gets or sets the dash style of legend borders.
     * @property {MindFusion.Charting.Drawing.Color} gridLineColor Gets or sets the line color of plot grid.
     * @property {Number} gridLineThickness Gets or sets the thickness of plot grid lines.
     * @property {MindFusion.Charting.Drawing.DashStyle} gridLineStyle Gets or sets the style of plot grid lines.
     * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of plot grid.
     * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of plot grid.
     */
    class Theme implements MindFusion.Charting.Common.INotifyPropertyChanged {
        /**
         * Initializes a new instance of the Theme class.
         * @param {MindFusion.Charting.Drawing.Brush} fill A Brush used to fill all series elements.
         * @param {MindFusion.Charting.Drawing.Brush} stroke A Brush used to stroke all series elements.
         * @param {Number} strokeThickness Uniform thickness of series elements' strokes.
         * @param {MindFusion.Charting.Drawing.DashStyle} strokeDashStyle Uniform dash style of series elements' strokes.
         */
        constructor(fill?: MindFusion.Charting.Drawing.Brush, stroke?: MindFusion.Charting.Drawing.Brush, strokeThickness?: number, strokeDashStyle?: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Loads the theme values from an XML file.
         * @param {String} fileUrl The URL of an XML file where the data should be read from.
         */
        loadFrom(fileUrl: string): void;
        /**
        * Saves the theme values to specified file.
        * @param {String} fileUrl The URL where the theme's XML should be posted to.
        */
        saveTo(url: string): void;
        /**
         * Occurs when a property value changes.
         * @event Theme.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {Theme} sender
         * @property {PropertyChangedEventArgs} args
         */
        propertyChanged: MindFusion.Charting.Common.PropertyChangedEventDispatcher;
        seriesStyle: MixedSeriesStyle;
        titleStyle: TextStyle;
        subtitleStyle: TextStyle;
        axisLabelsStyle: TextStyle;
        axisTitleStyle: TextStyle;
        dataLabelsStyle: TextStyle;
        widgetStyle: TextStyle;
        legendTitleStyle: TextStyle;
        /**
         * Gets or sets the name of font used to draw the chart title.
         */
        /**
         * Gets or sets the name of font used to draw the chart title.
         */
        titleFontName: string;
        /**
         * Gets or sets the size of font used to draw the chart title.
         */
        /**
         * Gets or sets the size of font used to draw the chart title.
         */
        titleFontSize: number;
        /**
         * Gets or sets the style of font used to draw the chart title.
         */
        /**
         * Gets or sets the style of font used to draw the chart title.
         */
        titleFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush used to draw the chart title.
         */
        /**
         * Gets or sets the Brush used to draw the chart title.
         */
        titleBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font used to draw the chart sub-title.
         */
        /**
         * Gets or sets the name of font used to draw the chart sub-title.
         */
        subtitleFontName: string;
        /**
         * Gets or sets the size of font used to draw the chart sub-title.
         */
        /**
         * Gets or sets the size of font used to draw the chart sub-title.
         */
        subtitleFontSize: number;
        /**
         * Gets or sets the style of font used to draw the chart sub-title.
         */
        /**
         * Gets or sets the style of font used to draw the chart sub-title.
         */
        subtitleFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush used to draw the chart sub-title.
         */
        /**
         * Gets or sets the Brush used to draw the chart sub-title.
         */
        subtitleBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font used to draw axis labels.
         */
        /**
         * Gets or sets the name of font used to draw axis labels.
         */
        axisLabelsFontName: string;
        /**
         * Gets or sets the size of font used to draw axis labels.
         */
        /**
         * Gets or sets the size of font used to draw axis labels.
         */
        axisLabelsFontSize: number;
        /**
         * Gets or sets the style of font used to draw axis labels.
         */
        /**
         * Gets or sets the style of font used to draw axis labels.
         */
        axisLabelsFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush used to draw axis labels.
         */
        /**
         * Gets or sets the Brush used to draw axis labels.
         */
        axisLabelsBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font used to draw axis titles.
         */
        /**
         * Gets or sets the name of font used to draw axis titles.
         */
        axisTitleFontName: string;
        /**
         * Gets or sets the size of font used to draw axis titles.
         */
        /**
         * Gets or sets the size of font used to draw axis titles.
         */
        axisTitleFontSize: number;
        /**
         * Gets or sets the style of font used to draw axis titles.
         */
        /**
         * Gets or sets the style of font used to draw axis titles.
         */
        axisTitleFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush used to draw axis titles.
         */
        /**
         * Gets or sets the Brush used to draw axis titles.
         */
        axisTitleBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font used to draw data labels.
         */
        /**
         * Gets or sets the name of font used to draw data labels.
         */
        dataLabelsFontName: string;
        /**
         * Gets or sets the size of font used to draw data labels.
         */
        /**
         * Gets or sets the size of font used to draw data labels.
         */
        dataLabelsFontSize: number;
        /**
         * Gets or sets the style of font used to draw data labels.
         */
        /**
         * Gets or sets the style of font used to draw data labels.
         */
        dataLabelsFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush used to draw data labels.
         */
        /**
         * Gets or sets the Brush used to draw data labels.
         */
        dataLabelsBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font used to draw text in UI widgets.
         */
        /**
         * Gets or sets the name of font used to draw text in UI widgets.
         */
        widgetFontName: string;
        /**
         * Gets or sets the size of font used to draw text in UI widgets.
         */
        /**
         * Gets or sets the size of font used to draw text in UI widgets.
         */
        widgetFontSize: number;
        /**
         * Gets or sets the style of font used to draw text in UI widgets.
         */
        /**
         * Gets or sets the style of font used to draw text in UI widgets.
         */
        widgetFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush used to draw text in UI widgets.
         */
        /**
         * Gets or sets the Brush used to draw text in UI widgets.
         */
        widgetBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the name of font used to draw legend titles.
         */
        /**
         * Gets or sets the name of font used to draw legend titles.
         */
        legendTitleFontName: string;
        /**
         * Gets or sets the size of font used to draw legend titles.
         */
        /**
         * Gets or sets the size of font used to draw legend titles.
         */
        legendTitleFontSize: number;
        /**
         * Gets or sets the style of font used to draw legend titles.
         */
        /**
         * Gets or sets the style of font used to draw legend titles.
         */
        legendTitleFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush used to draw legend titles.
         */
        /**
         * Gets or sets the Brush used to draw legend titles.
         */
        legendTitleBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        uniformSeriesFill: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        uniformSeriesStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        uniformSeriesStrokeThickness: number;
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        uniformSeriesStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        commonSeriesFills: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        commonSeriesStrokes: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        commonSeriesStrokeThicknesses: MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        commonSeriesStrokeDashStyles: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        seriesFills: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        seriesStrokes: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        seriesStrokeThicknesses: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>;
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        seriesStrokeDashStyles: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>;
        /**
         * Gets or sets a Brush used to draw the background of plots.
         */
        /**
         * Gets or sets a Brush used to draw the background of plots.
         */
        plotBackground: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke plot borders.
         */
        /**
         * Gets or sets a Brush used to stroke plot borders.
         */
        plotBorderStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the thickness of plot borders.
         */
        /**
         * Gets or sets the thickness of plot borders.
         */
        plotBorderStrokeThickness: number;
        /**
         * Gets or sets the dash style of plot borders.
         */
        /**
         * Gets or sets the dash style of plot borders.
         */
        plotBorderStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a Brush used to draw legend background.
         */
        /**
         * Gets or sets a Brush used to draw legend background.
         */
        legendBackground: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke highlighted items.
         */
        /**
         * Gets or sets a Brush used to stroke highlighted items.
         */
        highlightStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the thickness of highlight strokes.
         */
        /**
         * Gets or sets the thickness of highlight strokes.
         */
        highlightStrokeThickness: number;
        /**
         * Gets or sets the dash style of highlight strokes.
         */
        /**
         * Gets or sets the dash style of highlight strokes.
         */
        highlightStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a Brush used to stroke axis lines.
         */
        /**
         * Gets or sets a Brush used to stroke axis lines.
         */
        axisStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the thickness of axis lines.
         */
        /**
         * Gets or sets the thickness of axis lines.
         */
        axisStrokeThickness: number;
        /**
         * Gets or sets the dash style of axis lines.
         */
        /**
         * Gets or sets the dash style of axis lines.
         */
        axisStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a Brush used to draw legend borders.
         */
        /**
         * Gets or sets a Brush used to draw legend borders.
         */
        legendBorderStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the thickness of legend borders.
         */
        /**
         * Gets or sets the thickness of legend borders.
         */
        legendBorderStrokeThickness: number;
        /**
         * Gets or sets the dash style of legend borders.
         */
        /**
         * Gets or sets the dash style of legend borders.
         */
        legendBorderStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
        * Gets or sets the line color of plot grid.
        */
        /**
        * Gets or sets the line color of plot grid.
        */
        gridLineColor: MindFusion.Charting.Drawing.Color;
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        gridLineThickness: number;
        /**
        * Gets or sets the style of plot grid lines.
        */
        /**
        * Gets or sets the style of plot grid lines.
        */
        gridLineStyle: MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the main color of plot grid.
         */
        /**
         * Gets or sets the main color of plot grid.
         */
        gridColor1: MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the alternating color of plot grid.
         */
        /**
         * Gets or sets the alternating color of plot grid.
         */
        gridColor2: MindFusion.Charting.Drawing.Color;
        fileVersion: number;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Represents current tooltip.
     * @property {String} text Gets or sets the tooltip text.
     * @property {MindFusion.Drawing.Point} position Gets or sets the tooltip position.
     * @property {Number} horizontalPadding Gets or sets the horizontal padding to the left and right of the tooltip text.
     * @property {Number} verticalPadding Gets or sets the vertical padding above and below the tooltip text.
     * @property {Number} horizontalOffset Gets or sets the horizontal offset from the pointer.
     * @property {Number} verticalOffset Gets or sets the horizontal offset from the pointer.
     * @property {MindFusion.Charting.Drawing.Font} font Gets or sets the tooltip font.
     * @property {MindFusion.Charting.Drawing.Brush} brush Gets or sets the tooltip background brush.
     * @property {MindFusion.Charting.Drawing.Pen} pen Gets or sets the tooltip border pen.
     * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets the tooltip text brush.
     */
    class ToolTip {
        /**
         * Gets or sets the tooltip text.
         */
        /**
         * Gets or sets the tooltip text.
         */
        static text: string;
        /**
         * Gets or sets the tooltip position.
         */
        /**
         * Gets or sets the tooltip position.
         */
        static position: MindFusion.Drawing.Point;
        /**
         * Gets or sets the horizontal padding to the left and right of the tooltip text.
         */
        /**
         * Gets or sets the horizontal padding to the left and right of the tooltip text.
         */
        static horizontalPadding: number;
        /**
         * Gets or sets the vertical padding above and below the tooltip text.
         */
        /**
         * Gets or sets the vertical padding above and below the tooltip text.
         */
        static verticalPadding: number;
        /**
         * Gets or sets the horizontal offset from the pointer.
         */
        /**
         * Gets or sets the horizontal offset from the pointer.
         */
        static horizontalOffset: number;
        /**
         * Gets or sets the vertical offset from the pointer.
         */
        /**
         * Gets or sets the vertical offset from the pointer.
         */
        static verticalOffset: number;
        /**
         * Gets or sets the tooltip font.
         */
        /**
         * Gets or sets the tooltip font.
         */
        static font: MindFusion.Charting.Drawing.Font;
        /**
         * Gets or sets the tooltip background brush.
         */
        /**
         * Gets or sets the tooltip background brush.
         */
        static brush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the tooltip border pen.
         */
        /**
         * Gets or sets the tooltip border pen.
         */
        static pen: MindFusion.Charting.Drawing.Pen;
        /**
         * Gets or sets the tooltip text brush.
         */
        /**
         * Gets or sets the tooltip text brush.
         */
        static textBrush: MindFusion.Charting.Drawing.Brush;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Implements SeriesStyle using uniform attributes for all elements in all series.
     * @property {MindFusion.Charting.Drawing.Brush} uniformFill Gets or sets a Brush used to fill all elements of all series uniformly.
     * @property {MindFusion.Charting.Drawing.Brush} uniformStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
     * @property {Number} uniformStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
     * @property {MindFusion.Charting.Drawing.DashStyle} uniformStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
     */
    class UniformSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of the UniformSeriesStyle class.
         * @param {MindFusion.Charting.Drawing.Brush} [fill] A Brush used to fill all series elements.
         * @param {MindFusion.Charting.Drawing.Brush} [stroke] A Brush used to stroke all series elements.
         * @param {Number} [strokeThickness] Uniform thickness of series elements' strokes.
         * @param {MindFusion.Charting.Drawing.DashStyle} [strokeDashStyle] Uniform dash style of series elements' strokes.
         */
        constructor(fill?: MindFusion.Charting.Drawing.Brush, stroke?: MindFusion.Charting.Drawing.Brush, strokeThickness?: number, strokeDashStyle?: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Implements SeriesStyle.Fill. Returns UniformFill for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns UniformStroke for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns UniformStrokeThickness for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable double value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns UniformStrokeDashStyle for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        uniformFill: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        uniformStroke: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        uniformStrokeThickness: number;
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        uniformStrokeDashStyle: MindFusion.Charting.Drawing.DashStyle;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    class Utilities {
        static v: string;
        static rotateRect(rect: MindFusion.Drawing.Rect, pivot: MindFusion.Drawing.Point, angle: number): MindFusion.Drawing.Rect;
        static rotateSize(size: MindFusion.Drawing.Size, angle: number): MindFusion.Drawing.Size;
        static getCenter(rect: MindFusion.Drawing.Rect): MindFusion.Drawing.Point;
        static shellSort(data: number[]): number[];
        static shellSortByX(data: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>): MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>;
        static calcCircumferenceCoord(center: MindFusion.Drawing.Point, radius: number, angleDegrees: number): MindFusion.Drawing.Point;
        static calcPieBoundingRect(maxLeftLabelWidth: number, maxRightLabelWidth: number, leftLabelAngle: number, rightLabelAngle: number, radius: number): MindFusion.Drawing.Rect;
        static distance(p1: MindFusion.Drawing.Point, p2: MindFusion.Drawing.Point): number;
        static rad(degree: number): number;
        static deg(radians: number): number;
        static rotatePoint(pointToRotate: MindFusion.Drawing.Point, centerPoint: MindFusion.Drawing.Point, angleInDegrees: number): MindFusion.Drawing.Point;
        static opacityBrush(brush: MindFusion.Charting.Drawing.Brush, opacity: number): MindFusion.Charting.Drawing.Brush;
        static getShapePoly(point: MindFusion.Drawing.Point, shape: ScatterType, shapeSize: number): MindFusion.Drawing.Point[];
        static formatDateTime(ticks: number, dateTimeFormat: DateTimeFormat, customDateTimeFormat: string, labelPrefix: string, labelSuffix: string): string;
        static isInfinity(value: number): boolean;
        static isNullOrEmpty(value: string): boolean;
        static pointInEllipse(pt: MindFusion.Drawing.Point, rc: MindFusion.Drawing.Rect): boolean;
        static normalizeRect(rc: MindFusion.Drawing.Rect): MindFusion.Drawing.Rect;
        static pointInPolygon(poly: Array<MindFusion.Drawing.Point>, ptTest: MindFusion.Drawing.Point): boolean;
        static polyToRect(poly: Array<MindFusion.Drawing.Point>): MindFusion.Drawing.Rect;
        static pointInPolyRect(poly: Array<MindFusion.Drawing.Point>, ptTest: MindFusion.Drawing.Point, rBound: {
            value: MindFusion.Drawing.Rect;
        }): boolean;
        static pointInRect(pt: MindFusion.Drawing.Point, rc: MindFusion.Drawing.Rect): boolean;
        static pointInSegment(pt: MindFusion.Drawing.Point, sgm1: MindFusion.Drawing.Point, sgm2: MindFusion.Drawing.Point): boolean;
        static intersect(p1: MindFusion.Drawing.Point, p2: MindFusion.Drawing.Point, p3: MindFusion.Drawing.Point, p4: MindFusion.Drawing.Point): boolean;
        static ccw(p0: MindFusion.Drawing.Point, p1: MindFusion.Drawing.Point, p2: MindFusion.Drawing.Point): number;
        static cartesianToPolar(coordCenter: MindFusion.Drawing.Point, point: MindFusion.Drawing.Point): {
            a: number;
            r: number;
        };
        static polarToCartesian(coordCenter: MindFusion.Drawing.Point, a: number, r: number): MindFusion.Drawing.Point;
        static cartesianToPolarDegrees(center: any, point: any): {
            a: number;
            r: number;
        };
        static polarToCartesianDegrees(center: any, polar: any): MindFusion.Drawing.Point;
        static format(str: string, ...replacements: any[]): string;
        static compareTo(num: number, other: number): number;
        static isFloat(n: number): boolean;
        static isInteger(n: number): boolean;
        static parseType(typeName: string): any;
        static getType(obj: any): any;
        static genId(): number;
    }
    class Serializer {
        static componentsIn: MindFusion.Charting.Collections.Dictionary<number, any>;
        static componentsOut: MindFusion.Charting.Collections.Dictionary<any, number>;
        static serializeComponent(component: any): any;
        static deserializeComponent(obj: any): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Represents a two-dimensional vector.
     * @property {Number} x Gets or sets the X component of this vector.
     * @property {Number} y Gets or sets the Y component of this vector.
     * @property {Number} length Gets the length of this vector.
     * @property {Number} lengthSquared Gets the squared length of this vector.
     */
    class Vector {
        /**
         * Initializes a new instance of the Vector struct.
         * @param {Number} x X component of the vector.
         * @param {Number} y Y component of the vector.
         */
        constructor(x: number, y: number);
        /**
         * Makes this vector a unit vector.
         */
        normalize(): void;
        /**
         * Returns the size of cross-product of two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The size of cross-product.
         */
        static crossProduct(vector1: Vector, vector2: Vector): number;
        /**
         * Determines the angle between two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The angle between specified vectors.
         */
        static angleBetween(vector1: Vector, vector2: Vector): number;
        /**
         * Reverses the direction of this vector.
         */
        negate(): void;
        /**
         * Adds two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {MindFusion.Charting.Vector} A vector representing the sum of specified vectors.
         */
        static add(vector1: Vector, vector2: Vector): Vector;
        /**
         * Translates point by a vector.
         * @param {MindFusion.Charting.Vector} vector The vector to add.
         * @param {MindFusion.Drawing.Point} point The reference point.
         * @returns {MindFusion.Drawing.Point} The translated point.
         */
        static addPoint(vector: Vector, point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        /**
         * Subtracts two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {MindFusion.Charting.Vector} A vector representing the difference between specified vectors.
         */
        static subtract(vector1: Vector, vector2: Vector): Vector;
        /**
         * Multiplies vector by a scalar.
         * @param {MindFusion.Charting.Vector} vector The vector to multiply.
         * @param {Number} scalar The scalar value.
         * @returns {MindFusion.Charting.Vector} A vector containing the multiplication result.
         */
        static multiplyVectorAndScalar(vector: Vector, scalar: number): Vector;
        /**
         * Multiplies vector by a scalar.
         * @param {Number} scalar The scalar value.
         * @param {MindFusion.Charting.Vector} vector The vector to multiply.
         * @returns {MindFusion.Charting.Vector} A vector containing the multiplication result.
         */
        static multiplyScalarAndVector(scalar: number, vector: Vector): Vector;
        /**
     * Returns the dot product of two vectors.
     * @param {MindFusion.Charting.Vector} vector1 The first vector.
     * @param {MindFusion.Charting.Vector} vector2 The second vector.
     * @returns {Number} The dot product.
     */
        static multiply(vector1: Vector, vector2: Vector): number;
        /**
         * Divides a vector by a scalar.
         * @param {MindFusion.Charting.Vector} vector The vector to divide.
         * @param {Number} scalar The scalar value.
         * @returns {MindFusion.Charting.Vector} A vector containing the division result.
         */
        static divide(vector: Vector, scalar: number): Vector;
        /**
         * Finds the determinant of two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The determinant.
         */
        static determinant(vector1: Vector, vector2: Vector): number;
        /**
         * Gets or sets the X component of this vector.
         */
        /**
         * Gets or sets the X component of this vector.
         */
        x: number;
        /**
         * Gets or sets the Y component of this vector.
         */
        /**
         * Gets or sets the Y component of this vector.
         */
        y: number;
        /**
         * Gets the length of this vector.
         */
        length: number;
        /**
         * Gets the squared length of this vector.
         */
        lengthSquared: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    class VelocityCalculator {
        constructor(sampleSize?: number);
        reset(): void;
        addSample(movement: Vector, time: number): void;
        calculate(): Vector;
        canCalculate: boolean;
        Epsilon: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A Component that renders horizontal Axis ranges.
     * @property {Boolean} plotBottomSide Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
     */
    class XAxisRenderer extends MindFusion.Charting.AxisRenderer {
        /**
         * Initializes a new instance of the XAxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         */
        constructor(axis: Axis);
        /**
         * AxisRenderer.effectiveAxis override. Gets the effective horizontal Axis in current context,
         * getting one from Plot2D or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        effectiveAxis(context: RenderContext): Axis;
        /**
         * Component.measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        maxLabelHeight: number;
        /**
         * Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
         */
        /**
         * Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
         */
        plotBottomSide: boolean;
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Contains methods that facilitate serializing and deserializing objects to and from XML documents.
    */
    class XmlPersistContext {
        /**
         * Initializes a new instance of the XmlPersistContext class.
         * @param {XMLDocument} document
         * The associated XMLDocument.
         *
         * @param {number} fileVersion
         * Specifies the current file format number.
         *
         */
        constructor(document: Document, fileVersion: number);
        selectSingleNode(elementName: string, parentElement: Element): Element;
        hasValue(value: any): boolean;
        innerText(element: Element): string;
        /**
         * Adds a new child node with the specified name and
         * value to the specified parent node.
         */
        addChildElement(elementName: string, parentElement: Element, innerText?: string): Element;
        /**
         * Writes a string value with the specified name.
         */
        writeString(stringValue: string, elementName: string, parentElement: Element): Element;
        /**
         * Writes a boolean value with the specified name.
         */
        writeBool(boolValue: boolean, elementName: string, parentElement: Element): Element;
        /**
         * Writes an integer value with the specified name.
         */
        writeInt(intValue: number, elementName: string, parentElement: Element): Element;
        /**
         * Writes a float value with the specified name.
         */
        writeFloat(floatValue: number, elementName: string, parentElement: Element): Element;
        /**
         * Writes a reference to the specified brush. The brush
         * is registered within the internal hashtable for
         * subsequent serialization.
         */
        writeBrush(brush: MindFusion.Charting.Drawing.Brush, elementName: string, parentElement: Element): Element;
        /**
         * Writes all currently accumulated brushes.
         */
        writeBrushes(parentElement: Element): void;
        writeBrushContent(brushElement: Element, brush: MindFusion.Charting.Drawing.Brush): void;
        /**
        * Writes a list of brushes.
        */
        writeBrushList(list: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of floating-point numbers.
         */
        writeFloatList(list: MindFusion.Charting.Collections.List<number>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of colors.
         */
        writeColorList(list: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Color>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of dash styles.
         */
        writeDashStyleList(list: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes the specified enum value.
         */
        writeEnum(enumValue: Object, elementName: string, parentElement: Element): Element;
        /**
         * Writes the specified color.
         */
        writeColor(color: MindFusion.Charting.Drawing.Color, elementName: string, parentElement: Element): Element;
        /**
         * Writes the specified object under the specified name.
         */
        /**
         * Reads a string value with the specified name.
         */
        readString(elementName: string, parentElement: Element, defaultValue?: string): string;
        /**
         * Reads a boolean value with the specified name.
         */
        readBool(elementName: string, parentElement: Element, defaultValue?: boolean): boolean;
        /**
         * Reads an integer value with the specified name.
         */
        readInt(elementName: string, parentElement: Element, defaultValue?: number): number;
        /**
         * Reads a float value with the specified name.
         */
        readFloat(elementName: string, parentElement: Element, defaultValue?: number): number;
        /**
         * Reads a list of floats.
         */
        readFloatList(elementName: string | Element, subElementName: string, parentElement: Element): Collections.List<number>;
        /**
         * Reads a list of dash styles.
         */
        readDashStyleList(elementName: string | Element, subElementName: string, parentElement?: Element): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>;
        /**
         * Reads a MindFusion.Charting.Drawing.Brush object with the specified name.
         */
        readBrush(elementName: string | Element, parentElement: Element, defaultValue?: MindFusion.Charting.Drawing.Brush): MindFusion.Charting.Drawing.Brush;
        /**
         * Reads a list of brushes.
         */
        readBrushList(elementName: Element | string, subElementName: string, parentElement: Element): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Reads all brushes.
         */
        readBrushes(parentElement: Element): void;
        readBrushContent(brushElement: Element): MindFusion.Charting.Drawing.Brush;
        /**
         * Reads an enum value with the specified name.
         */
        readEnum(elementName: string, parentElement: Element, defaultValue?: number): Object;
        /**
         * Reads a color with the specified name.
         */
        readColor(elementName: string, parentElement: Element, defaultValue?: MindFusion.Charting.Drawing.Color): MindFusion.Charting.Drawing.Color;
        /**
         * Reads a StringFormat object with the specified name.
         */
        readStringFormat(elementName: string, parentElement: Element, defultFormat?: MindFusion.Charting.Drawing.StringFormat): MindFusion.Charting.Drawing.StringFormat;
        /**
         * Reads an object with the specified name.
         */
        readObject(elementName: string, parentElement: any): Object;
        /**
         * Gets the underlying XML document.
         */
        xmlDocument: Document;
        /**
         * Gets the format revision number for the file being currently serialized.
         */
        fileVersion: number;
        /**
         * Gets or sets a value indicating whether resource accumulation is disabled.
         */
        /**
         * Gets or sets a value indicating whether resource accumulation is disabled.
         */
        inplaceResources: boolean;
        LatestFormat: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A Component that renders vertical Axis ranges.
     * @property {Boolean} plotLeftSide Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
     */
    class YAxisRenderer extends AxisRenderer {
        /**
         * Initializes a new instance of the YAxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         * @param {MindFusion.Charting.Axis} [xAxis] The Axis used to check data item visibility.
         */
        constructor(axis: Axis, xAxis?: Axis);
        /**
         * AxisRenderer.effectiveAxis override. Gets the effective vertical Axis in current context,
         * getting one from Plot2D or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        effectiveAxis(context: RenderContext): Axis;
        /**
         * Component.measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        maxLabelWidth: number;
        /**
         * Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
         */
        /**
         * Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
         */
        plotLeftSide: boolean;
        /**
        * Gets the horizontal alignment of axis label
        */
        /**
        * Sets the horizontal alignment of axis label
        */
        labelAlignment: MindFusion.Charting.Drawing.StringAlignment;
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Represents a controller that zooms into plot's data range.
     */
    class ZoomController extends Plot2DController {
        /**
         * Initializes a new instance of the ZoomController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        /**
         * Plot2DController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
         * PlotController.OnMouseWheel override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         * @param {Number} delta A number value specifying the direction and the amount of scrolling needed.
         */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * PlotController.drawInteraction override. Draws the currently selected data range
         * that that controller will zoom into when the user releases the mouse button.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics A Graphics instance.
         */
        drawInteraction(graphics: MindFusion.Charting.Drawing.Graphics): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    class ZoomHistory {
        constructor(parent: MindFusion.Charting.Components.Component);
        merge(axes: MindFusion.Charting.Collections.IEnumerable<Axis>): void;
        register(axes: MindFusion.Charting.Collections.IEnumerable<Axis>): void;
        restore(): void;
        reset(): void;
        changed: MindFusion.Charting.Common.EventDispatcher<EventArgs>;
        canRestore: boolean;
        isZoomedOut: boolean;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    class AdjustRangesVisitor extends MindFusion.Charting.Components.ComponentVisitor {
        constructor(context: MindFusion.Charting.RenderContext);
        visitPlot(plot: MindFusion.Charting.Plot): void;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    class MeasureRangesVisitor extends MindFusion.Charting.Components.ComponentVisitor {
        constructor(context: MindFusion.Charting.RenderContext);
        visitPlot(plot: MindFusion.Charting.Plot): void;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    class StartMeasureVisitor extends MindFusion.Charting.Components.ComponentVisitor {
        constructor(context: MindFusion.Charting.RenderContext);
        visitPlot(plot: MindFusion.Charting.Plot): void;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control that contains multiple chart plots and gauges and manages their layout.
    * @property {Panel} rootPanel Gets the root Panel in the hierarchy of dashboard components.
    * @property {StackPanel} layoutPanel Gets a Panel containing dashboard components that should participate in layout measurements and be arranged relatively to each other.
    * @property {Theme} theme Gets or sets a Theme specifying appearance of dashboard elements.
    * @property {MindFusion.Charting.Drawing.Color} backColor Gets or sets dashboard's back color.
    * @property {String} backgroundImageLocation Gets or sets dashboard's background image.
    * @property {Boolean} backgroundImageAutoSize Gets or sets whether auto-size mode is enabled for BackgroundImage.
    * @property {MindFusion.Charting.Drawing.ImageAlign} backgroundImageAlign Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
    * @property {Boolean} allowZoom Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
    */
    class Dashboard implements MindFusion.Charting.Components.RootControl {
        /**
         * Initializes a new instance of the Dashboard class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this dashboard with.
         */
        constructor(element: HTMLCanvasElement);
        /**
         * Gets the root Panel in the hierarchy of dashboard components.
         */
        rootPanel: MindFusion.Charting.Components.Panel;
        /**
         * Gets a Panel containing dashboard components that should participate
         * in layout measurements and be arranged relatively to each other.
         */
        layoutPanel: MindFusion.Charting.Components.StackPanel;
        /**
         * Control.OnResize override. Invalidates the layout of child components and runs a new layout pass.
         * @param {EventArgs} e An EventArgs instance.
         */
        onResize(): void;
        handleResize(): void;
        /**
         * Binds the chart to current DataSource.
         */
        dataBind(): void;
        dataBindInternal(): void;
        onUnbind(): void;
        onBind(): void;
        /**
         * Draws the dashboard on specified Graphics surface.
         * @param {MindFusion.Charting.Drawing.Graphics} g A Graphics instance.
         * @param {MindFusion.Drawing.Rect} layoutRect Current layout rectangle.
         * @param {MindFusion.Drawing.Rect} clipRect Current clip rectangle.
         */
        draw(): void;
        /**
         * Creates a RenderContext instance.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics A Graphics surface where dashboard elements should be rendered.
         * @param {MindFusion.Drawing.Rect} clipRect The current clip rectangle.
         * @returns {MindFusion.Charting.RenderContext} A RenderContext instance.
         */
        createRenderContext(graphics: MindFusion.Charting.Drawing.Graphics, clipRect: MindFusion.Drawing.Rect): MindFusion.Charting.RenderContext;
        /**
         * Raised when the user clicks on a data item inside a plot.
         * @event Dashboard.dataItemClicked
         * @type {EventDispatcher}
         * @property {Dashboard} sender
         * @property {HitResult} args
         */
        dataItemClicked: Common.EventDispatcher<HitResult>;
        /**
         * Raises the DataItemClicked event
         * if the user has clicked on data element in a plot.
         * @param {MouseEvent} e A MouseEvent instance.
         */
        protected onClick(e: MouseEvent): void;
        /**
         * Handles the HTMLCanvasElement mousedown event.
         * @param {MouseEvent} e A MouseEvent instance.
         */
        protected onMouseDown(e: MouseEvent): void;
        /**
         * Handles the HTMLCanvasElement mousemove event.
         * @param {MouseEvent} e A MouseEvent instance.
         */
        onMouseMove(e: MouseEvent): void;
        getCursorHint(x: number, y: number): MindFusion.Charting.Components.CursorHint;
        tooltipBrush: MindFusion.Charting.Drawing.Brush;
        tooltipPen: MindFusion.Charting.Drawing.Pen;
        toolTipTextBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Handles the HTMLCanvasElement mouseup event.
         * @param {MouseEvent} e A MouseEvent instance.
         */
        onMouseUp(e: MouseEvent): void;
        protected onMouseLeave(e: MouseEvent): void;
        /**
         * Implements RootControl.InvalidateLayout. Invalidates layout of specified component.
         * @param {Components.Component} panel The component to invalidate.
         */
        invalidateLayout(panel: MindFusion.Charting.Components.Component): void;
        /**
         * Implements RootControl.InvalidateLayout. Invalidates the specified region of a component.
         * @param {RectD} [rect] The area to invalidate and redraw.
         * @param {Components.Component} [panel] The reference Component.
         */
        invalidate(rect?: MindFusion.Drawing.Rect, panel?: MindFusion.Charting.Components.Component): void;
        /**
         * Gets or sets a Theme specifying appearance of dashboard elements.
         */
        /**
         * Gets or sets a Theme specifying appearance of dashboard elements.
         */
        theme: MindFusion.Charting.Theme;
        /**
        * Gets or sets dashboard's back color.
        */
        /**
         * Gets or sets dashboard's back color.
         */
        backColor: MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets dashboard's background image.
         */
        /**
         * Gets or sets dashboard's background image.
         */
        backgroundImageLocation: string;
        /**
         * Gets or sets whether auto-size mode is enabled for BackgroundImage.
         */
        /**
         * Gets or sets whether auto-size mode is enabled for BackgroundImage.
         */
        backgroundImageAutoSize: boolean;
        /**
         * Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
         */
        /**
         * Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
         */
        backgroundImageAlign: MindFusion.Charting.Drawing.ImageAlign;
        /**
         * Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
         */
        allowZoom: boolean;
        bindingsValid: boolean;
        /**
         * Deserializes the control's data from JSON string.
         */
        fromJson(json: string): any;
        /**
         * Serializes the control's data to JSON string.
         */
        toJson(): any;
        protected toJsonPre(): any;
        initialize(): void;
        preparePostback(sender: any, args: any): void;
        onControlLoaded(): void;
        controlLoaded: Common.EventDispatcher<Common.EmptyEventArgs>;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A base class for chart controls.
    * @property {MindFusion.Charting.Components.Panel} plotPanel Gets the Panel that contains the chart's plot and associated elements.
    * @property {MindFusion.Charting.Collections.List<Series>} dataBoundSeries Contains series generated from DataSource data.
    * @property {Plot} plot Gets the chart's Plot component.
    * @property {GridPanel} chartPanel Gets or sets the GridPanel that contains the chart's PlotPanel and axis renderers.
    * @property {String} title Gets or sets the title of this chart.
    * @property {Margins} titleMargin Gets or sets the margin space around Title.
    * @property {String} titleFontName Gets or sets the name of Font used to draw chart's Title.
    * @property {Number} titleFontSize Gets or sets the size of Font used to draw chart's Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of Font used to draw chart's Title.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush used to draw chart's Title.
    * @property {String} plotImageLocation Gets or sets the Image drawn inside chart's plot area.
    * @property {Boolean} plotImageAutoSize Gets or sets whether auto-size mode is enabled for PlotImage.
    * @property {MindFusion.Charting.Drawing.ImageAlign} plotImageAlign Gets or sets the alignment of PlotImage relatively to the plot boundaries.
    * @property {String} legendTitle Gets or sets the legend title.
    * @property {Boolean} showLegendTitle Gets a value indicating whether to display the legend title.
    * @property {Number} legendSpacing Gets the distance between adjacent entries in the legend.
    * @property {LayoutAlignment} legendHorizontalAlignment Gets or sets the horizontal alignment of the legend.
    * @property {LayoutAlignment} legendVerticalAlignment Gets or sets the vertical alignment of the legend.
    * @property {Margins} legendMargin Gets or sets the margin space around the legend.
    * @property {Boolean} showLegend Gets or sets a value indicating whether the chart should draw a legend.
    * @property {LegendRenderer} legendRenderer Gets the LegendRenderer component used to draw the chart's legend.
    * @property {Boolean} showZoomWidgets Gets or sets a value indicating whether the plot should show zoom buttons.
    * @property {Boolean} showDataLabels Gets or sets what kind of labels from data series should be drawn.
    * @property {Boolean} showHighlight Gets a value indicating whether to show highlights on data items.
    * @property {Boolean} showToolTips Gets a value indicating whether to show tooltips.
    * @property {Boolean} allowMoveLegend Gets or sets a value indicating whether users are allowed to move the legend.
    * @property {Object} dataSource Gets or sets the chart's data source.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} xDataFields Gets or sets the names of fields in the data source whose values are assigned to X coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} yDataFields Gets or sets the names of fields in the data source whose values are assigned to Y coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} zDataFields Gets or sets the names of fields in the data source whose values are assigned to Z coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} innerLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as inner labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} outerLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as outer labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} toolTipsDataFields Gets or sets the names of fields in the data source whose values are shown as tooltips of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} xAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as X axis labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} yAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as Y axis labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} zAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as Z axis labels of rendered graphical elements.
    */
    abstract class Chart extends Dashboard {
        /**
         * Initializes a new instance of the Chart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {SeriesRenderer} [renderer] A SeriesRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, renderer?: MindFusion.Charting.SeriesRenderer);
        /**
         * Gets the chart's Plot component.
         */
        plot: MindFusion.Charting.Plot;
        /**
         * Gets the Panel that contains the chart's plot and associated elements.
         */
        plotPanel: MindFusion.Charting.Components.Panel;
        /**
         * Contains series generated from DataSource data.
         */
        /**
         * Contains series generated from DataSource data.
         */
        dataBoundSeries: MindFusion.Charting.Collections.List<Series>;
        /**
         * Gets the GridPanel that contains the chart's PlotPanel and axis renderers.
         */
        chartPanel: MindFusion.Charting.Components.GridPanel;
        titlePanel: MindFusion.Charting.Components.TextComponent;
        /**
         * Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of Plot -derived class.
         */
        createPlot(): MindFusion.Charting.Plot;
        /**
         * Zooms out of current data range.
         */
        zoomOut(): void;
        /**
         * Resets zoom level to original data range.
         */
        resetZoom(): void;
        /**
         * Control.OnPaddingChanged override.
         * @param {EventArgs} e An EventArgs instance.
         */
        onPaddingChanged(e: MindFusion.EventArgs): void;
        /**
         * Control.OnSizeChanged override.
         * @param {EventArgs} e An EventArgs instance.
         */
        onSizeChanged(e: MindFusion.EventArgs): void;
        /**
         * Gets or sets the title of this chart.
         */
        /**
         * Gets or sets the title of this chart.
         */
        title: string;
        /**
         * Gets or sets the margin space around Title.
         */
        /**
         * Gets or sets the margin space around Title.
         */
        titleMargin: MindFusion.Charting.Margins;
        /**
         * Gets or sets the name of Font used to draw chart's Title.
         */
        /**
         * Gets or sets the name of Font used to draw chart's Title.
         */
        titleFontName: string;
        /**
         * Gets or sets the size of Font used to draw chart's Title.
         */
        /**
         * Gets or sets the size of Font used to draw chart's Title.
         */
        titleFontSize: number;
        /**
         * Gets or sets the style of Font used to draw chart's Title.
         */
        /**
         * Gets or sets the style of Font used to draw chart's Title.
         */
        titleFontStyle: MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the Brush used to draw chart's Title.
         */
        /**
         * Gets or sets the Brush used to draw chart's Title.
         */
        titleBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Image drawn inside chart's plot area.
         */
        /**
         * Gets or sets the Image drawn inside chart's plot area.
         */
        plotImageLocation: string;
        /**
         * Gets or sets whether auto-size mode is enabled for PlotImage.
         */
        /**
         * Gets or sets whether auto-size mode is enabled for PlotImage.
         */
        plotImageAutoSize: boolean;
        /**
         * Gets or sets the alignment of PlotImage relatively to the plot boundaries.
         */
        /**
         * Gets or sets the alignment of PlotImage relatively to the plot boundaries.
         */
        plotImageAlign: MindFusion.Charting.Drawing.ImageAlign;
        /**
         * Gets the default SeriesRenderer for this chart.
         */
        seriesRenderer: MindFusion.Charting.SeriesRenderer;
        protected m_seriesRenderer: MindFusion.Charting.SeriesRenderer;
        /**
         * Gets or sets the legend title.
         */
        /**
         * Gets or sets the legend title.
         */
        legendTitle: string;
        /**
        * Gets a value indicating whether to display the legend title.
        */
        /**
        * Sets a value indicating whether to display the legend title.
        */
        showLegendTitle: boolean;
        /**
        * Gets the distance between adjacent entries in the legend.
        */
        /**
        * Sets the distance between adjacent entries in the legend.
        */
        legendSpacing: number;
        /**
         * Gets or sets the horizontal alignment of the legend.
         */
        /**
         * Gets or sets the horizontal alignment of the legend.
         */
        legendHorizontalAlignment: MindFusion.Charting.Components.LayoutAlignment;
        /**
         * Gets or sets the vertical alignment of the legend.
         */
        /**
         * Gets or sets the vertical alignment of the legend.
         */
        legendVerticalAlignment: MindFusion.Charting.Components.LayoutAlignment;
        /**
         * Gets or sets the margin space around the legend.
         */
        /**
         * Gets or sets the margin space around the legend.
         */
        legendMargin: MindFusion.Charting.Margins;
        /**
         * Gets or sets a value indicating whether the chart should draw a legend.
         */
        /**
         * Gets or sets a value indicating whether the chart should draw a legend.
         */
        showLegend: boolean;
        /**
         * Gets the LegendRenderer component used to draw the chart's legend.
         */
        legendRenderer: MindFusion.Charting.LegendRenderer;
        /**
         * Gets or sets a value indicating whether the plot should show zoom buttons.
         */
        /**
         * Gets or sets a value indicating whether the plot should show zoom buttons.
         */
        showZoomWidgets: boolean;
        /**
         * Gets or sets what kind of labels from data series should be drawn.
         */
        /**
         * Gets or sets what kind of labels from data series should be drawn.
         */
        showDataLabels: MindFusion.Charting.LabelKinds;
        /**
        * Gets a value indicating whether to show highlights on data items.
        */
        /**
        * Sets a value indicating whether to show highlights on data items.
        */
        showHighlight: boolean;
        /**
        * Gets a value indicating whether to show tooltips.
        */
        /**
        * Sets a value indicating whether to show tooltips.
        */
        showToolTips: boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to move the legend.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to move the legend.
         */
        allowMoveLegend: boolean;
        static getField(fields: MindFusion.Charting.Collections.List<string>, i: number): string;
        dataBindInternal(): void;
        /**
         * Gets or sets the chart's data source.
         */
        /**
         * Gets or sets the chart's data source.
         */
        dataSource: Object;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to X coordinates of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to X coordinates of rendered graphical elements.
         */
        xDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Y coordinates of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Y coordinates of rendered graphical elements.
         */
        yDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Z coordinates of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Z coordinates of rendered graphical elements.
         */
        zDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as inner labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as inner labels of rendered graphical elements.
         */
        innerLabelsDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as outer labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as outer labels of rendered graphical elements.
         */
        outerLabelsDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as tooltips of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as tooltips of rendered graphical elements.
         */
        toolTipsDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as X axis labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as X axis labels of rendered graphical elements.
         */
        xAxisLabelsDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Y axis labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Y axis labels of rendered graphical elements.
         */
        yAxisLabelsDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Z axis labels of rendered graphical elements.
         */
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Z axis labels of rendered graphical elements.
         */
        zAxisLabelsDataFields: MindFusion.Charting.Collections.ObservableCollection<string>;
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A base class for charts that display X and Y axes.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets the list of series whose data is drawn in this chart.
    * @property {GridType} gridType Gets or sets the type of grid to draw in this chart.
    * @property {Boolean} pinGrid Gets or sets a value indicating whether grid stripes should be pinned in place or scroll together with the plot when users pan it.
    * @property {MindFusion.Charting.Axis} xAxis Gets or sets an Axis object representing horizontal data range.
    * @property {MindFusion.Charting.Axis} yAxis Gets or sets an Axis object representing vertical data range.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} annotations Gets or sets the list of series whose labels are drawn as annotations.
    * @property {Boolean} allowPan Gets or sets a value indicating whether users are allowed to pan the chart's plot.
    * @property {Boolean} showScatter Gets or sets a value indicating whether the chart should render scatter shapes.
    * @property {Boolean} showXCoordinates Gets or sets a value indicating whether to show X axis coordinates.
    * @property {Boolean} showYCoordinates Gets or sets a value indicating whether to show Y axis coordinates.
    * @property {Boolean} showXTicks Gets or sets a value indicating whether to show X axis ticks.
    * @property {Boolean} showYTicks Gets or sets a value indicating whether to show Y axis ticks.
    * @property {Number} xAxisTickLength Gets or sets the length of X axis ticks.
    * @property {Number} yAxisTickLength Gets or sets the length of Y axis ticks.
    * @property {Number} xAxisLabelRotationAngle Gets or sets the rotation angle of the X axis labels.
    * @property {Number} yAxisLabelRotationAngle Gets or sets the rotation angle of the Y axis labels.
    * @property {MindFusion.Charting.Drawing.StringAlignment} yLabelAlignment Gets the horizontal alignment of Y-axis labels.
    * @property {Boolean} showXRangeSelector Gets or sets a value indicating whether to show a RangeSelector for the X axis, to let users scroll or resize the currently visible horizontal data window.
    * @property {Boolean} showYRangeSelector Gets or sets a value indicating whether to show a RangeSelector for the Y axis, to let users scroll or resize the currently visible vertical data window.
    * @property {Number} xScrollRangeMin Gets or sets the smallest value allowed to scroll to using the X axis' RangeSelector.
    * @property {Number} yScrollRangeMin Gets or sets the smallest value allowed to scroll to using the Y axis' RangeSelector.
    * @property {Number} xScrollRangeMax Gets or sets the largest value allowed to scroll to using the X axis' RangeSelector.
    * @property {Number} yScrollRangeMax Gets or sets the largest value allowed to scroll to using the Y axis' RangeSelector.
    */
    abstract class BiaxialChart extends Chart {
        /**
         * Initializes a new instance of the BiaxialChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {Renderer2D} [seriesRenderer] A SeriesRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: MindFusion.Charting.Renderer2D);
        /**
         * Dashboard.CreateRenderContext override. Creates a RenderContext instance.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics An Graphics surface where dashboard elements should be rendered.
         * @param {MindFusion.Drawing.Rect} clipRect The current clip rectangle.
         * @returns {MindFusion.Charting.RenderContext} A RenderContext instance.
         */
        createRenderContext(graphics: MindFusion.Charting.Drawing.Graphics, clipRect: MindFusion.Drawing.Rect): MindFusion.Charting.RenderContext2D;
        onUnbind(): void;
        onBind(): void;
        /**
         * Chart.zoomOut override. Zooms out of current data range.
         */
        zoomOut(): void;
        /**
         * Chart.resetZoom override. Resets zoom level to original data range.
         */
        resetZoom(): void;
        /**
         * Gets or sets the type of grid to draw in this chart.
         */
        /**
         * Gets or sets the type of grid to draw in this chart.
         */
        gridType: MindFusion.Charting.GridType;
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        pinGrid: boolean;
        /**
         * Gets or sets an Axis object representing horizontal data range.
         */
        /**
         * Gets or sets an Axis object representing horizontal data range.
         */
        xAxis: MindFusion.Charting.Axis;
        /**
         * Gets or sets an Axis object representing vertical data range.
         */
        /**
         * Gets or sets an Axis object representing vertical data range.
         */
        yAxis: MindFusion.Charting.Axis;
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        series: MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Gets or sets the list of series whose labels are drawn as annotations.
         */
        /**
         * Gets or sets the list of series whose labels are drawn as annotations.
         */
        annotations: MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Gets or sets a value indicating whether the chart should render
         shapes.
         */
        /**
         * Gets or sets a value indicating whether the chart should render scatter shapes.
         */
        showScatter: boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to pan the chart's plot.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to pan the chart's plot.
         */
        allowPan: boolean;
        /**
         * Gets or sets a value indicating whether to show X axis coordinates.
         */
        /**
         * Gets or sets a value indicating whether to show X axis coordinates.
         */
        showXCoordinates: boolean;
        /**
         * Gets or sets a value indicating whether to show Y axis coordinates.
         */
        /**
         * Gets or sets a value indicating whether to show Y axis coordinates.
         */
        showYCoordinates: boolean;
        /**
         * Gets or sets a value indicating whether to show X axis ticks.
         */
        /**
         * Gets or sets a value indicating whether to show X axis ticks.
         */
        showXTicks: boolean;
        /**
         * Gets or sets a value indicating whether to show Y axis ticks.
         */
        /**
         * Gets or sets a value indicating whether to show Y axis ticks.
         */
        showYTicks: boolean;
        /**
        * Gets the length of X axis ticks.
        */
        /**
        * Sets the length of X axis ticks.
        */
        xAxisTickLength: number;
        /**
        * Gets the length of Y axis ticks.
        */
        /**
        * Sets the length of Y axis ticks.
        */
        yAxisTickLength: number;
        /**
         * Gets the rotation angle of the X axis labels.
         */
        /**
         * Sets the rotation angle of the X axis labels.
         */
        xAxisLabelRotationAngle: number;
        /**
         * Gets the rotation angle of the Y axis labels.
         */
        /**
         * Sets the rotation angle of the Y axis labels.
         */
        yAxisLabelRotationAngle: number;
        /**
        * Gets the horizontal alignment of Y-axis labels.
        */
        /**
        * Sets the horizontal alignment of Y-axis labels.
        */
        yLabelAlignment: MindFusion.Charting.Drawing.StringAlignment;
        /**
         * Gets a value indicating whether to show a RangeSelector for the X axis,
         * to let users scroll or resize the currently visible horizontal data window.
         */
        /**
         * Sets a value indicating whether to show a RangeSelector for the X axis,
         * to let users scroll or resize the currently visible horizontal data window.
         */
        showXRangeSelector: boolean;
        /**
         * Gets the smallest value allowed to scroll to using the X axis' RangeSelector.
         */
        /**
         * Sets the smallest value allowed to scroll to using the X axis' RangeSelector.
         */
        xScrollRangeMin: number;
        /**
         * Gets the largest value allowed to scroll to using the X axis' RangeSelector.
         */
        /**
         * Sets the largest value allowed to scroll to using the X axis' RangeSelector.
         */
        xScrollRangeMax: number;
        /**
         * Gets a value indicating whether to show a RangeSelector for the Y axis,
         * to let users scroll or resize the currently visible vertical data window.
         */
        /**
         * Sets a value indicating whether to show a RangeSelector for the Y axis,
         * to let users scroll or resize the currently visible vertical data window.
         */
        showYRangeSelector: boolean;
        /**
         * Gets the smallest value allowed to scroll to using the Y axis' RangeSelector.
         */
        /**
         * Sets the smallest value allowed to scroll to using the Y axis' RangeSelector.
         */
        yScrollRangeMin: number;
        /**
         * Gets the largest value allowed to scroll to using the Y axis' RangeSelector.
         */
        /**
         * Sets the largest value allowed to scroll to using the Y axis' RangeSelector.
         */
        yScrollRangeMax: number;
        fromJson(json: string): any;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw bar charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between bars to space occupied by bars.
    */
    class BarChart extends BiaxialChart {
        /**
        * Initializes a new instance of the BarChart class.
        * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
        * @param {Renderer2D} [seriesRenderer] A Renderer2D used to draw chart's data series.
        */
        constructor(element: HTMLCanvasElement, seriesRenderer?: MindFusion.Charting.Renderer2D);
        static createRenderer(series: MindFusion.Charting.Collections.ObservableCollection<Series>): MindFusion.Charting.Renderer2D;
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the Plot2D class.
         */
        createPlot(): MindFusion.Charting.Plot;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        barSpacingRatio: number;
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw line charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    */
    class LineChart extends BiaxialChart {
        /**
         * Initializes a new instance of the LineChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {LineRenderer} [seriesRenderer] A LineRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: LineRenderer);
        static createRenderer(series: MindFusion.Charting.Collections.ObservableCollection<Series>): MindFusion.Charting.Renderer2D;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        series: MindFusion.Charting.Collections.ObservableCollection<Series>;
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw pie charts.
    * @property {Series} series Gets or sets the series whose data is drawn in this chart.
    * @property {Number} startAngle Gets or sets the angle where first data item of series should be drawn.
    * @property {Boolean} allowRotate Gets or sets a value indicating whether users are allowed to rotate this chart.
    * @property {Number} chartPadding Gets or set padding space between the plot's border and series graphics.
    * @property {List<Number>} detachedSlices Gets or sets indices of detached slices.
    */
    class PieChart extends Chart {
        /**
         * Initializes a new instance of the PieChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {PieRenderer} [seriesRenderer] A PieRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: PieRenderer);
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the PolarPlot class.
         */
        createPlot(): MindFusion.Charting.Plot;
        onUnbind(): void;
        onBind(): void;
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        series: MindFusion.Charting.Series;
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        startAngle: number;
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        allowRotate: boolean;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        chartPadding: number;
        /**
         * Gets or sets indices of detached slices.
         */
        /**
         * Gets or sets indices of detached slices.
         */
        detachedSlices: MindFusion.Charting.Collections.List<number>;
        fromJson(json: string): void;
        toJson(): string;
    }
}
