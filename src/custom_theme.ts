import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const custom_theme: CustomThemeConfig = {
	name: "custom_theme",
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Pt Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Pt Sans, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "var(--color-primary-100)",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #b7a2c9
		"--color-primary-50": "244 241 247", // #f4f1f7
		"--color-primary-100": "241 236 244", // #f1ecf4
		"--color-primary-200": "237 232 242", // #ede8f2
		"--color-primary-300": "226 218 233", // #e2dae9
		"--color-primary-400": "205 190 217", // #cdbed9
		"--color-primary-500": "183 162 201", // #b7a2c9
		"--color-primary-600": "165 146 181", // #a592b5
		"--color-primary-700": "137 122 151", // #897a97
		"--color-primary-800": "110 97 121", // #6e6179
		"--color-primary-900": "90 79 98", // #5a4f62
		// secondary | #4b3a70
		"--color-secondary-50": "228 225 234", // #e4e1ea
		"--color-secondary-100": "219 216 226", // #dbd8e2
		"--color-secondary-200": "210 206 219", // #d2cedb
		"--color-secondary-300": "183 176 198", // #b7b0c6
		"--color-secondary-400": "129 117 155", // #81759b
		"--color-secondary-500": "75 58 112", // #4b3a70
		"--color-secondary-600": "68 52 101", // #443465
		"--color-secondary-700": "56 44 84", // #382c54
		"--color-secondary-800": "45 35 67", // #2d2343
		"--color-secondary-900": "37 28 55", // #251c37
		// tertiary | #322f42
		"--color-tertiary-50": "224 224 227", // #e0e0e3
		"--color-tertiary-100": "214 213 217", // #d6d5d9
		"--color-tertiary-200": "204 203 208", // #cccbd0
		"--color-tertiary-300": "173 172 179", // #adacb3
		"--color-tertiary-400": "112 109 123", // #706d7b
		"--color-tertiary-500": "50 47 66", // #322f42
		"--color-tertiary-600": "45 42 59", // #2d2a3b
		"--color-tertiary-700": "38 35 50", // #262332
		"--color-tertiary-800": "30 28 40", // #1e1c28
		"--color-tertiary-900": "25 23 32", // #191720
		// success | #3eb38a
		"--color-success-50": "226 244 237", // #e2f4ed
		"--color-success-100": "216 240 232", // #d8f0e8
		"--color-success-200": "207 236 226", // #cfece2
		"--color-success-300": "178 225 208", // #b2e1d0
		"--color-success-400": "120 202 173", // #78caad
		"--color-success-500": "62 179 138", // #3eb38a
		"--color-success-600": "56 161 124", // #38a17c
		"--color-success-700": "47 134 104", // #2f8668
		"--color-success-800": "37 107 83", // #256b53
		"--color-success-900": "30 88 68", // #1e5844
		// warning | #c58332
		"--color-warning-50": "246 236 224", // #f6ece0
		"--color-warning-100": "243 230 214", // #f3e6d6
		"--color-warning-200": "241 224 204", // #f1e0cc
		"--color-warning-300": "232 205 173", // #e8cdad
		"--color-warning-400": "214 168 112", // #d6a870
		"--color-warning-500": "197 131 50", // #c58332
		"--color-warning-600": "177 118 45", // #b1762d
		"--color-warning-700": "148 98 38", // #946226
		"--color-warning-800": "118 79 30", // #764f1e
		"--color-warning-900": "97 64 25", // #614019
		// error | #c91e4f
		"--color-error-50": "247 221 229", // #f7dde5
		"--color-error-100": "244 210 220", // #f4d2dc
		"--color-error-200": "242 199 211", // #f2c7d3
		"--color-error-300": "233 165 185", // #e9a5b9
		"--color-error-400": "217 98 132", // #d96284
		"--color-error-500": "201 30 79", // #c91e4f
		"--color-error-600": "181 27 71", // #b51b47
		"--color-error-700": "151 23 59", // #97173b
		"--color-error-800": "121 18 47", // #79122f
		"--color-error-900": "98 15 39", // #620f27
		// surface | #212531
		"--color-surface-50": "222 222 224", // #dedee0
		"--color-surface-100": "211 211 214", // #d3d3d6
		"--color-surface-200": "200 201 204", // #c8c9cc
		"--color-surface-300": "166 168 173", // #a6a8ad
		"--color-surface-400": "100 102 111", // #64666f
		"--color-surface-500": "33 37 49", // #212531
		"--color-surface-600": "30 33 44", // #1e212c
		"--color-surface-700": "25 28 37", // #191c25
		"--color-surface-800": "20 22 29", // #14161d
		"--color-surface-900": "16 18 24" // #101218

	}
};