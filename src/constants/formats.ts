/**
 * ANSI formats
 * 
 * @desc ANSI text format codes
 * @readonly
 * @enum {string}
 */
export enum formats {
    /**
     * `<CSI>` `0`
     * 
     * @desc Reset all formats
     */
    RESET = '0',

    /**
     * `<CSI>` `1`
     * 
     * @desc Bold format
     */
    BOLD = '1',

    /**
     * `<CSI>` `2`
     * 
     * @desc Dim format
     */
    DIM = '2',
    
    /**
     * `<CSI>` `3`
     * 
     * @desc Italic format
     */
    ITALIC = '3',

    /**
     * `<CSI>` `4`
     * 
     * @desc Underline format
     */
    UNDERLINE = '4',

    /**
     * `<CSI>` `5`
     * 
     * @desc Blinking format
     */
    BLINKING = '5',

    /**
     * `<CSI>` `6`
     * 
     * @desc Blinking rapid format
     */
    BLINKING_RAPID = '6',

    /**
     * `<CSI>` `7`
     * 
     * @desc Inverse format
     */
    INVERSE = '7',

    /**
     * `<CSI>` `8`
     * 
     * @desc Hidden format
     */
    HIDDEN = '8',

    /**
     * `<CSI>` `8`
     * 
     * @desc Strikethrough format
     */
    STRIKETHROUGH = '9',

    /**
     * `<CSI>` `10`
     * 
     * @desc Font default format
     */
    FONT_DEFAULT = '10',

    /**
     * `<CSI>` `11`
     * 
     * @desc Font alternative 1 format
     */
    FONT_ALTERNATIVE_1 = '11',
    
    /**
     * `<CSI>` `12`
     * 
     * @desc Font alternative 2 format
     */
    FONT_ALTERNATIVE_2 = '12',

    /**
     * `<CSI>` `13`
     * 
     * @desc Font alternative 3 format
     */
    FONT_ALTERNATIVE_3 = '13',

    /**
     * `<CSI>` `14`
     * 
     * @desc Font alternative 4 format
     */
    FONT_ALTERNATIVE_4 = '14',

    /**
     * `<CSI>` `15`
     * 
     * @desc Font alternative 5 format
     */
    FONT_ALTERNATIVE_5 = '15',

    /**
     * `<CSI>` `16`
     * 
     * @desc Font alternative 6 format
     */
    FONT_ALTERNATIVE_6 = '16',

    /**
     * `<CSI>` `17`
     * 
     * @desc Font alternative 7 format
     */
    FONT_ALTERNATIVE_7 = '17',

    /**
     * `<CSI>` `18`
     * 
     * @desc Font alternative 8 format
     */
    FONT_ALTERNATIVE_8 = '18',

    /**
     * `<CSI>` `19`
     * 
     * @desc Font alternative 9 format
     */
    FONT_ALTERNATIVE_9 = '19',

    /**
     * `<CSI>` `22`
     * 
     * @desc Reset bold format
     */
    BOLD_RESET = '22',

    /**
     * `<CSI>` `22`
     * 
     * @desc Reset dim format
     */

    DIM_RESET = '22',

    /**
     * `<CSI>` `23`
     * 
     * @desc Reset italic format
     */
    ITALIC_RESET = '23',

    /**
     * `<CSI>` `24`
     * 
     * @desc Reset underline format
     */
    UNDERLINE_RESET = '24',

    /**
     * `<CSI>` `25`
     * 
     * @desc Reset blinking format
     */
    BLINKING_RESET = '25',
    
    /**
     * `<CSI>` `25`
     * 
     * @desc Reset inverse format
     */
    INVERSE_RESET = '27',
    
    /**
     * `<CSI>` `28`
     * 
     * @desc Reset hidden format
     */
    HIDDEN_RESET = '28',
    
    /**
     * `<CSI>` `29`
     * 
     * @desc Reset strikethrough format
     */
    STRIKETHROUGH_RESET = '29',
    
}
