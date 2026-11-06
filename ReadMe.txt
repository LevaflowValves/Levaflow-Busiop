BUILD 2026-11-06T06:30:00Z  (on top of 2026-11-06T06:00:00Z — the "build calender" build)
Serial numbers: DC tick boxes, QC Register check, data fix

SQL — in this order, BEFORE deploying:
  1. structure_serial_fix_2026-11-06.sql        -> BOTH companies. Check: 2 columns + 2 triggers listed.
  2. data_serial_fix_FLOMETRIQ_2026-11-06.sql   -> Flometriq only. It prints what it did (send me the result).
Then deploy Index.html + version.txt to both companies. Header must show 2026-11-06T06:30:00Z.

1. DC — serials with tick boxes (Stores › Despatch › DC)
   - Each line shows its own Sl No's free serials as tick boxes in a box that scrolls after 4 rows.
   - Shift-click ticks a run. "Tick the first N" fills the next free ones. "Clear" empties the line.
   - What is ticked shows as ranges ("29641 to 29644").
   - Ticked fewer / more than Send now: the line turns yellow, the ticks are kept, and
     "Make Send now = n" sets the quantity (not above the balance). The DC can't go until they match.
   - Changing Send now keeps the ticks already made (the first N are ticked by themselves only on an empty line).
   - A line short of serials: "Ask QC". If the same item's other Sl No has spare serials, the line says so
     ("29638 to 29640 spare on Sl No 1 (same item)") and QC's card carries it. Stores can't tick them.

2. QC › Serial Number Register › Register check (button next to + New entry, for QC people)
   - "Same serial in two places" at the top, then one card per contract whose serials don't match:
     Sl No with none / more than ordered / fewer, serials without a Sl No, serials in two places.
   - Tick serials (nameplates checked) → "Move ticked to Sl No …" or "Remove from <contract>".
     Remove = kept unused with the reason (never deleted). Serials already on a DC can't be changed.
   - Any QC person needs a one-time code from Thangavignesh (QC Head) or a Super Admin
     (Deepak or Bala Boopathy): "Ask …" sends the bell; they press "Give … a code" on the same card
     (one use, that contract, 24 h). The QC Head and the Super Admins move / remove without a code.
   - Every change goes into the serial's history (who, when, why, code from whom) and the audit log.
     A contract drops off the list when its serials match. An open "Give serials" card for it closes.

3. Guard: the register refuses a serial number that is already in it (New entry, Excel load or by hand).

4. Data fix (Flometriq) — nothing deleted; wrong copies are kept unused with the reason; serials on a DC untouched:
   - Copies loaded twice on the same contract and Sl No (24730–24733).
   - 260107: 29013–29018 off (they belong to 260018).
   - Stock (UL) copies of serials that went on a contract — the contract keeps the serial (29019–29033).
   - Re-split in Sl No order (lines are the same item): 260094, 260114, 260097, 260056, 260021, 260020, 260011.
     A contract is skipped if any of its serials is already on a DC, or the serials don't equal the qty.
   After this, 260094's DC can go (Sl No 1: 29135–29137, Sl No 2: 29138–29140).

5. What QC corrects by hand — see the note "Serial_Register_Corrections_QC" (PDF).

Tested headless on both companies: tick boxes, first-N, shift-click run, prompt + Make Send now, ticks kept
on qty change, spare hint, Register check card, refusal without a code, ask → QC Head gives code → move with
code, history, contract drops off, clash listed, remove = kept unused, DC Sl No 2 then picks its serials.
SQL: tested twice on local Postgres (second run changes nothing). Earlier tests: same results as before.
