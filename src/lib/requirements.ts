export const requirements = [
  {
    item: "Tape library",
    value: "A SAS or SCSI LTO library with a robotic changer.",
  },
  {
    item: "Tape generation",
    value:
      "Archive and restore on LTO-5 through LTO-9. Restore-only from LTO-3 and LTO-4 tapes, depending on your library's drives.",
  },
  {
    item: "Host adapter",
    value: "A supported SAS host adapter (HBA) connecting the library to your server.",
  },
  {
    item: "Server",
    value: "A dedicated, supported 64-bit Linux server with enough local disk for the catalog.",
  },
  {
    item: "Source storage",
    value: "Any mounted folder or shared workspace — including popular platforms such as Avid NEXIS.",
  },
  {
    item: "Database",
    value: "Included with BloomLTO and hosted locally. Nothing extra to install or license.",
  },
  {
    item: "Tape format",
    value: "LTFS on LTO-5 and newer, so your tapes stay readable without BloomLTO.",
  },
  {
    item: "Access",
    value: "A web interface reachable on your local network. No client software to install.",
  },
];
