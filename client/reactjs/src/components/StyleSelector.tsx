import {
  ChevronDownIcon,
  CpuIcon,
  ImageIcon,
  PenToolIcon,
  SparkleIcon,
  SquareIcon,
} from "lucide-react";
import { thumbnailStyles, type ThumbnailStyle } from "../assets/assets";

const StyleSelector = ({
  value,
  onChange,
  isOpen,
  setIsOpen,
}: {
  value: ThumbnailStyle;
  onChange: (style: ThumbnailStyle) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const styleDescriptions: Record<ThumbnailStyle, string> = {
    "Bold & Graphic": "High contrast, bold typography, striking visuals",
    Minimalist: "Clean, simple, lots of white space",
    Photorealistic: "Photo-based, natural looking",
    Illustrated: "Hand-drawn, artistic, creative",
    "Tech/Futuristic": "Modern, sleek, tech-inspired",
  };

  const styleIcons: Record<ThumbnailStyle, React.ReactNode> = {
    "Bold & Graphic": <SparkleIcon className="h-5 w-5" />,
    Minimalist: <SquareIcon className="h-5 w-5" />,
    Photorealistic: <ImageIcon className="h-5 w-5" />,
    Illustrated: <PenToolIcon className="h-5 w-5" />,
    "Tech/Futuristic": <CpuIcon className="h-5 w-5" />,
  };

  return (
    <div className="relative space-y-3">
      <label className="block text-sm font-semibold text-zinc-300">
        Thumbnail Style
      </label>

      {/* Selector Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between rounded-xl border px-4 py-4 text-left transition bg-zinc-950/60 border-white/10 text-zinc-200 hover:border-white/20"
      >
        <div className="flex items-center gap-3">
          <div className="text-zinc-400">{styleIcons[value]}</div>
          <span className="font-medium">{value}</span>
        </div>

        <ChevronDownIcon
          className={`h-5 w-5 text-zinc-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Floating Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-[100] mt-2 w-full rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl overflow-hidden backdrop-blur-3xl">
          <div className="py-2">
            {thumbnailStyles.map((style) => (
              <button
                key={style}
                type="button"
                onClick={() => {
                  onChange(style);
                  setIsOpen(false);
                }}
                className={`flex w-full items-start gap-4 px-5 py-4 text-left transition hover:bg-white/5 ${
                  value === style ? "bg-white/5" : ""
                }`}
              >
                <div
                  className={`mt-1 ${
                    value === style ? "text-white" : "text-zinc-500"
                  }`}
                >
                  {styleIcons[style]}
                </div>
                <div className="space-y-0.5">
                  <p
                    className={`font-bold text-[15px] ${
                      value === style ? "text-white" : "text-zinc-200"
                    }`}
                  >
                    {style}
                  </p>
                  <p className="text-[13px] text-zinc-500 leading-tight">
                    {styleDescriptions[style]}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StyleSelector;
