import React from "react";

export function ConversationCardSkeleton() {
  return (
    <div
      data-testid="conversation-card-skeleton"
      className="relative h-auto w-full p-3.5 border-b border-neutral-600"
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        {/* Left: status + title */}
        <div className="flex items-center gap-2 w-full">
          {/* Status indicator */}
          <div className="skeleton-round h-3 w-3" />

          {/* Title */}
          <div className="skeleton h-4 w-2/3 rounded" />
        </div>

        {/* Right: context menu */}
        <div className="skeleton-round h-4 w-4 ml-2" />
      </div>

      {/* Footer */}
      <div className="mt-2 flex flex-col gap-1">
        {/* Repository */}
        <div className="skeleton h-3 w-1/2 rounded" />

        {/* Timestamp */}
        <div className="skeleton h-3 w-1/4 rounded" />
      </div>
    </div>
  );
}
