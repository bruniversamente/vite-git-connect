import { useId, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

type Props = {
  label: string;
  placeholder?: string;
  onSelecionado?: (info: { lat: number; lng: number; endereco: string }) => void;
};

export default function EnderecoAutocompleteGoogle({ label, placeholder = "Digite o endereço", onSelecionado }: Props) {
  const id = useId();
  const autocompleteRef = useRef<any>(null);

  const handleLoad = (ref: any) => {
    autocompleteRef.current = ref;
  };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace?.();
    const loc = place?.geometry?.location;
    const endereco = place?.formatted_address || place?.name || "";
    if (loc && endereco) {
      onSelecionado?.({ lat: loc.lat(), lng: loc.lng(), endereco });
    }
  };

  return (
    <label htmlFor={id} className="grid gap-1">
      <span className="text-sm text-neutral-700">{label}</span>
      <Autocomplete onLoad={handleLoad} onPlaceChanged={handlePlaceChanged}>
        <input id={id} placeholder={placeholder} className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
      </Autocomplete>
    </label>
  );
}
