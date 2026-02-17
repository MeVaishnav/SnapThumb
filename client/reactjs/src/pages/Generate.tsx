import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  colorSchemes,
  type AspectRatio,
  type IThumbnail,
  type ThumbnailStyle,
} from "../assets/assets";
import SoftBackdrop from "../components/SoftBackdrop";
import AspectRatioSelector from "../components/AspectRatioSelector";
import StyleSelector from "../components/StyleSelector";
import ColorSchemeSelector from "../components/ColorSchemeSelector";

const Generate = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");

  const [thumbnail, setThumbnail] = useState<IThumbnail | null>(null);
  const [loading, setLoading] = useState(false);

  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("16:9");
  const [colorSchemeId, setColorSchemeId] = useState<string>(
    colorSchemes[0].id
  );

  const [style, setStyle] = useState<ThumbnailStyle>("Bold & Graphic");

  const [styleDropdownOpen, setStyleDropdownOpen] = useState(false);

  return (
    <>
      <SoftBackdrop />
      <div className="pt-24 min-h-screen text-white">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-28 lg:pb-8">
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
            {/* LEFT PANEL */}
            <div
              className={`p-8 rounded-3xl bg-zinc-900/40 border border-white/10 shadow-2xl space-y-8 backdrop-blur-xl ${
                id ? "pointer-events-none opacity-50" : ""
              }`}
            >
              <div>
                <h2 className="text-2xl font-bold text-zinc-100 mb-2">
                  Create Your Thumbnail
                </h2>
                <p className="text-sm text-zinc-400">
                  Describe your vision and let AI bring it to life
                </p>
              </div>

              <div className="space-y-6">
                {/* Title Input */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-zinc-300">
                    Title or Topic
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={100}
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full bg-zinc-950/60 border border-white/10 rounded-xl p-4 outline-none focus:border-pink-500 transition-all text-zinc-100 placeholder:text-zinc-600"
                      placeholder="e.g., 10 Tips for Better Sleep"
                    />
                    <div className="absolute -bottom-6 right-0 text-[11px] font-medium tracking-wider">
                      <span
                        className={
                          title.length > 0 ? "text-pink-500" : "text-zinc-500"
                        }
                      >
                        {title.length}
                      </span>
                      <span className="text-zinc-600">/100</span>
                    </div>
                  </div>
                </div>

                {/*aspect ratio*/}
                <AspectRatioSelector
                  value={aspectRatio}
                  onChange={setAspectRatio}
                />

                {/* style selector */}
                <StyleSelector
                  value={style}
                  onChange={setStyle}
                  isOpen={styleDropdownOpen}
                  setIsOpen={setStyleDropdownOpen}
                />

                {/*colorschemeselector*/}
                <ColorSchemeSelector
                  value={colorSchemeId}
                  onChange={setColorSchemeId}
                />

                {/* Additional Prompts Textarea */}
                <div className="space-y-3 pt-2">
                  <label className="text-sm font-semibold text-zinc-300">
                    Additional Prompts{" "}
                    <span className="text-zinc-500 font-normal">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    value={additionalDetails}
                    onChange={(e) => setAdditionalDetails(e.target.value)}
                    className="w-full bg-zinc-950/60 border border-white/10 rounded-xl p-4 outline-none focus:border-pink-500 transition-all text-zinc-100 placeholder:text-zinc-600 h-32 resize-none"
                    placeholder="Add any specific elements, mood, or style preferences..."
                  />
                </div>

                {/* GENERATE BUTTON */}
                {!id && (
                  <button
                    disabled={loading || !title}
                    className="w-full py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_8px_30px_rgb(219,39,119,0.3)]"
                  >
                    {loading ? "Generating..." : "Generate Thumbnail"}
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT PANEL - Preview Placeholder */}
            <div className="hidden lg:flex rounded-3xl border border-dashed border-white/10 bg-white/[0.02] items-center justify-center min-h-[550px]">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border-2 border-dashed border-zinc-700 rounded-full mx-auto flex items-center justify-center">
                  <div className="w-2 h-2 bg-zinc-700 rounded-full animate-pulse" />
                </div>
                <p className="text-zinc-600 font-medium italic">
                  Your masterpiece will appear here
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Generate;
