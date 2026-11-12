import { useEffect } from "react";

const BASE = "TalkDID · Discourse × did:ckb";

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · TalkDID` : BASE;
    return () => {
      document.title = BASE;
    };
  }, [title]);
}
