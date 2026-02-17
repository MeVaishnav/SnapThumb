import { RectangleHorizontal, RectangleVertical, Square } from "lucide-react";
import { aspectRatios, type AspectRatio } from "../assets/assets";
import type React from "react";

const AspectRatioSelector = ({
  value,
  onChange,
}: {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
}) => {
  const iconMap = {
    "16:9": <RectangleHorizontal className="size-6" />,
    "1:1": <Square className="size-6" />,
    "9:16": <RectangleVertical className="size-6" />,
  } as Record<AspectRatio, React.ReactNode>;

  return (
    <div className="space-y-3 dark">
      <label className="block text-sm font-medium text-zinc-200">
        Aspect Ratio
      </label>

      <div className="flex flex-wrap gap-2">
        {aspectRatios.map((ratio) => (
          <button
            key={ratio}
            type="button"
            onClick={() => onChange(ratio)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition ${
              value === ratio
                ? "bg-white/15 border-white/20"
                : "bg-white/5 border-white/10 hover:bg-white/10"
            }`}
          >
            {iconMap[ratio]}
            <span className="text-sm">{ratio}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AspectRatioSelector;
