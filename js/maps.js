function initMap() {
  const myLatLang = { lat: 59.406680837118024, lng: 17.924130196940062 };
  var options = {
    zoom: 16.4,
    center: myLatLang,
  };
  var icon = {
    url: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMXB0IiB2aWV3Qm94PSItNTkgMCA1MTEgNTExLjk5ODgzIiB3aWR0aD0iNTExcHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTM4Ni4wMTk1MzEgMTk3LjU3MDMxMmMwIDY2LjQ5MjE4OC0zNC4zNTkzNzUgMTI0Ljk2MDkzOC04Ni4yODUxNTYgMTU4LjYyNS03LjgyMDMxMyA1LjA3ODEyNi0xNC4zNTU0NjkgMTEuODk0NTMyLTE4Ljk0OTIxOSAyMC4wMDM5MDdsLTY3Ljg0NzY1NiAxMTkuODUxNTYyYy0uMTUyMzQ0LjI2OTUzMS0uMzA0Njg4LjUyMzQzOC0uNDgwNDY5Ljc4MTI1LTcuMjUgMTEuNTI3MzQ0LTI0LjM3NSAxMS4yNjk1MzEtMzEuMTk1MzEyLS43ODEyNWwtNjcuODQzNzUtMTE5Ljg1MTU2MmMtNC41ODk4NDQtOC4wOTc2NTctMTEuMTA5Mzc1LTE0LjkxNzk2OS0xOC45MjE4NzUtMTkuOTc2NTYzLTUyLjY3MTg3NS0zNC4xMzI4MTItODcuMjc3MzQ0LTkzLjc3NzM0NC04Ni4yOTI5NjktMTYxLjQzNzUgMS40NjQ4NDQtMTAxLjcxNDg0NCA4NC40OTIxODctMTg0LjY5OTIxOCAxODYuMjAzMTI1LTE4Ni4xMTMyODEgNi4wOTM3NS0uMDgyMDMxIDEyLjEyMTA5NC4xMjEwOTQgMTguMDcwMzEyLjYwMTU2MyA5Ny4xNDQ1MzIgNy44MTI1IDE3My41NDI5NjkgODkuMTMyODEyIDE3My41NDI5NjkgMTg4LjI5Njg3NHptMCAwIiBmaWxsPSIjNDRiZmQ3Ii8+PHBhdGggZD0ibTM4Ni4wMTk1MzEgMTk3LjU3MDMxMmMwIDY2LjQ5MjE4OC0zNC4zNTkzNzUgMTI0Ljk2MDkzOC04Ni4yODUxNTYgMTU4LjYyNS03LjgyMDMxMyA1LjA3ODEyNi0xNC4zNTU0NjkgMTEuODk0NTMyLTE4Ljk0OTIxOSAyMC4wMDM5MDdsLTY3Ljg0NzY1NiAxMTkuODUxNTYyYy0uMTUyMzQ0LjI2OTUzMS0uMzA0Njg4LjUyMzQzOC0uNDgwNDY5Ljc4MTI1LS4xNzU3ODEtLjI1NzgxMi0uMzI4MTI1LS41MTE3MTktLjQ4MDQ2OS0uNzgxMjVsLTY3Ljg0NzY1Ni0xMTkuODUxNTYyYy00LjU4NTkzNy04LjA5NzY1Ny0xMS4xMDU0NjgtMTQuOTE3OTY5LTE4LjkxNzk2OC0xOS45NzY1NjMtNTIuNjc1NzgyLTM0LjEzMjgxMi04Ny4yNzczNDQtOTMuNzc3MzQ0LTg2LjI5Njg3Ni0xNjEuNDM3NSAxLjQwMjM0NC05Ny40NjQ4NDQgNzcuNjk1MzEzLTE3Ny43MzA0NjggMTczLjU2MjUtMTg1LjUxMTcxOCA5Ny4xNDQ1MzIgNy44MTI1IDE3My41NDI5NjkgODkuMTMyODEyIDE3My41NDI5NjkgMTg4LjI5Njg3NHptMCAwIiBmaWxsPSIjN2NkMmUzIi8+PHBhdGggZD0ibTMzNi41ODk4NDQgMTk3LjM0Mzc1YzAgNzcuMDU0Njg4LTYyLjQ4MDQ2OSAxMzkuNDkyMTg4LTEzOS40ODgyODIgMTM5LjQ5MjE4OC03Ny4wMzkwNjIgMC0xMzkuNDkyMTg3LTYyLjQ1MzEyNi0xMzkuNDkyMTg3LTEzOS40OTIxODggMC04Mi44MDQ2ODggNzEuODc4OTA2LTE0Ny43NDYwOTQgMTU0Ljg0NzY1Ni0xMzguNjQwNjI1IDY5LjgwODU5NCA3LjY0ODQzNyAxMjQuMTMyODEzIDY2LjgwMDc4MSAxMjQuMTMyODEzIDEzOC42NDA2MjV6bTAgMCIgZmlsbD0iI2MyZWFmMiIvPjxwYXRoIGQ9Im0zMzYuNTg5ODQ0IDE5Ny4zNDM3NWMwIDcxLjg0NzY1Ni01NC4zMjAzMTMgMTMxLjAwMzkwNi0xMjQuMTMyODEzIDEzOC42NTIzNDQtNjkuODEyNS03LjY0ODQzOC0xMjQuMTMyODEyLTY2LjgwNDY4OC0xMjQuMTMyODEyLTEzOC42NTIzNDQgMC03MS44Mzk4NDQgNTQuMzIwMzEyLTEzMC45OTIxODggMTI0LjEzMjgxMi0xMzguNjQwNjI1IDY5LjgwODU5NCA3LjY0ODQzNyAxMjQuMTMyODEzIDY2LjgwMDc4MSAxMjQuMTMyODEzIDEzOC42NDA2MjV6bTAgMCIgZmlsbD0iI2RlZjRmOCIvPjxwYXRoIGQ9Im0yOTUuMzk0NTMxIDE4NS4yNzM0Mzh2MTExLjAzOTA2MmMtMTYuMjg5MDYyIDE2LjE3NTc4MS0zNi41MzkwNjIgMjguMzU5Mzc1LTU5LjE2NDA2MiAzNC45NTMxMjUtMTIuNDE3OTY5IDMuNjI1LTI1LjU0Mjk2OSA1LjU3MDMxMy0zOS4xMjg5MDcgNS41NzAzMTMtMTMuNTg1OTM3IDAtMjYuNzEwOTM3LTEuOTQ1MzEzLTM5LjEyODkwNi01LjU3MDMxMy0yMi42MzY3MTgtNi41OTM3NS00Mi44ODY3MTgtMTguNzc3MzQ0LTU5LjE2NDA2Mi0zNC45NTMxMjV2LTExMS4wMzkwNjJsOTguMjkyOTY4LTkwLjU1NDY4OHptMCAwIiBmaWxsPSIjNmRjNTRhIi8+PHBhdGggZD0ibTMxNi4wNTA3ODEgMTkwLjc1NzgxMi0xMTAuMzk0NTMxLTExMC4zOTQ1MzFjLTQuNjk1MzEyLTQuNjk1MzEyLTEyLjQwMjM0NC00LjcxNDg0My0xNy4xMTcxODggMGwtMTEwLjM5NDUzMSAxMTAuMzk0NTMxYy00LjY5MTQwNiA0LjY5NTMxMy00LjY5MTQwNiAxMi4zMDQ2ODggMCAxNi45OTYwOTRsNC41MTk1MzEgNC41MTk1MzJjNC42OTE0MDcgNC42OTE0MDYgMTIuMzAwNzgyIDQuNjkxNDA2IDE2Ljk5NjA5NCAwbDk3LjQzNzUtOTcuNDM3NSA5Ny40Mzc1IDk3LjQzNzVjNC42OTUzMTMgNC42OTUzMTIgMTIuMzA0Njg4IDQuNjk1MzEyIDE3IDBsNC41MTU2MjUtNC41MTU2MjZjNC42OTUzMTMtNC42OTUzMTIgNC42OTUzMTMtMTIuMzA4NTkzIDAtMTd6bTAgMCIgZmlsbD0iIzVjYTMzYiIvPjxwYXRoIGQ9Im05OC44MDg1OTQgMjUwLjQ3NjU2MnY0NS44MzU5MzhjMTYuMjc3MzQ0IDE2LjE3NTc4MSAzNi41MjczNDQgMjguMzU5Mzc1IDU5LjE2NDA2MiAzNC45NTMxMjUgMTIuNDE3OTY5IDMuNjI1IDI1LjU0Mjk2OSA1LjU3MDMxMyAzOS4xMjg5MDYgNS41NzAzMTMgNS4xODc1IDAgMTAuMzA4NTk0LS4yODkwNjMgMTUuMzQzNzUtLjgzOTg0NC01MS41MjczNDMtNS42NTIzNDQtOTQuNjA1NDY4LTM5LjM1NTQ2OS0xMTMuNjM2NzE4LTg1LjUxOTUzMnptMCAwIiBmaWxsPSIjNWRiMzNhIi8+PHBhdGggZD0ibTIzNi4yMjY1NjIgMjY4LjkwNjI1djYyLjM1OTM3NWMtMTIuNDE3OTY4IDMuNjI1LTI1LjU0Mjk2OCA1LjU3MDMxMy0zOS4xMjg5MDYgNS41NzAzMTMtMTMuNTg1OTM3IDAtMjYuNzA3MDMxLTEuOTQ1MzEzLTM5LjEyODkwNi01LjU3MDMxM3YtNjIuMzU5Mzc1YzAtMjEuNjEzMjgxIDE3LjUxOTUzMS0zOS4xMjg5MDYgMzkuMTI4OTA2LTM5LjEyODkwNiAxMC44MTI1IDAgMjAuNTg5ODQ0IDQuMzgyODEyIDI3LjY3NTc4MiAxMS40NTcwMzEgNy4wNzQyMTggNy4wODIwMzEgMTEuNDUzMTI0IDE2Ljg3MTA5NCAxMS40NTMxMjQgMjcuNjcxODc1em0wIDAiIGZpbGw9IiM1Y2EzM2IiLz48cGF0aCBkPSJtODkuNDY4NzUgMTc5LjQzNzUtMTEuMzIwMzEyIDExLjMyNDIxOWMtNC42OTE0MDcgNC42ODc1LTQuNjkxNDA3IDEyLjI5Mjk2OSAwIDE2Ljk5MjE4NyA0LjQ4MDQ2OCA0LjQ4NDM3NSA2LjUxNTYyNCA3LjI2OTUzMiAxMS4zODI4MTIgNy45MjU3ODItMS41ODk4NDQtMTEuOTUzMTI2LTEuNjA5Mzc1LTI0LjI2OTUzMi0uMDYyNS0zNi4yNDIxODh6bTAgMCIgZmlsbD0iIzQ5OGQyZCIvPjxwYXRoIGQ9Im0xNTcuOTcyNjU2IDMxOC4xMDkzNzV2MTMuMTU2MjVjMTIuNDE3OTY5IDMuNjI1IDI1LjU0Mjk2OSA1LjU3MDMxMyAzOS4xMjg5MDYgNS41NzAzMTMgNS4xODc1IDAgMTAuMzA4NTk0LS4yODkwNjMgMTUuMzQzNzUtLjgzOTg0NC0xOS42NzU3ODEtMi4xNjAxNTYtMzguMTI1LTguNDE3OTY5LTU0LjQ3MjY1Ni0xNy44ODY3MTl6bTAgMCIgZmlsbD0iIzQ5OGQyZCIvPjxwYXRoIGQ9Im0xOTQuMzAwNzgxLjAxOTUzMTJjLTEwNi43ODkwNjIgMS40ODgyODA4LTE5My44MDA3ODEgODkuMTcxODc0OC0xOTMuODAwNzgxIDE5Ni41ODIwMzA4IDAgNjYuOTI1NzgyIDMzLjU3ODEyNSAxMjguNjQwNjI2IDg5LjgyNDIxOSAxNjUuMDg5ODQ0IDYuODI0MjE5IDQuNDIxODc1IDEyLjQ5NjA5MyAxMC40MTAxNTYgMTYuNDA2MjUgMTcuMzE2NDA2bDI5LjgyMDMxMiA1Mi42Nzk2ODhjMi4wODk4NDQgMy42OTE0MDYgNi43NzM0MzggNC45OTIxODggMTAuNDY4NzUgMi45MDIzNDQgMy42ODc1LTIuMDg5ODQ0IDQuOTg4MjgxLTYuNzc3MzQ0IDIuODk4NDM4LTEwLjQ2NDg0NGwtMjkuODI0MjE5LTUyLjY4MzU5NGMtNS4xMjEwOTQtOS4wNDY4NzUtMTIuNTI3MzQ0LTE2Ljg3NS0yMS40MTc5NjktMjIuNjM2NzE4LTUxLjkzNzUtMzMuNjYwMTU3LTgzLjcyNjU2Mi05MS4zNjcxODgtODIuODAwNzgxLTE1NC44Nzg5MDcgMS4zOTg0MzgtOTcuMTAxNTYyIDgxLjUzNTE1Ni0xNzcuMTk5MjE5IDE3OC42MzY3MTktMTc4LjU1MDc4MSAxMDEuNjAxNTYyLTEuMzUxNTYyIDE4My44MzIwMzEgODAuODI0MjE5IDE4My44MzIwMzEgMTgxLjIyMjY1NiAwIDYxLjY4MzU5NC0zMC45NDkyMTkgMTE4LjU3NDIxOS04Mi43ODEyNSAxNTIuMTgzNTk0LTguOTE3OTY5IDUuNzgxMjUtMTYuMzM5ODQ0IDEzLjYxNzE4OC0yMS40NTcwMzEgMjIuNjYwMTU2bC02Ny44NDc2NTcgMTE5Ljg1NTQ2OWMtNC4wMzEyNSA3LjExNzE4Ny0xNC4yODEyNSA3LjEyNS0xOC4zMTI1IDBsLTIyLjg5NDUzMS00MC40NDUzMTNjLTIuMDg5ODQzLTMuNjkxNDA2LTYuNzc3MzQzLTQuOTg4MjgxLTEwLjQ2NDg0My0yLjkwMjM0My0zLjY5MTQwNyAyLjA4OTg0My00Ljk5MjE4OCA2Ljc3NzM0My0yLjkwMjM0NCAxMC40Njg3NWwyMi44OTg0MzcgNDAuNDQ1MzEyYzkuOTE0MDYzIDE3LjUxMTcxOSAzNS4xMjEwOTQgMTcuNTE5NTMxIDQ1LjAzOTA2MyAwbDY3Ljg0NzY1Ni0xMTkuODU1NDY5YzMuOTA2MjUtNi45MDIzNDMgOS41OTM3NS0xMi44OTg0MzcgMTYuNDQ5MjE5LTE3LjM0Mzc1IDU2LjIxODc1LTM2LjQ0OTIxOCA4OS43ODEyNS05OC4xNTYyNSA4OS43ODEyNS0xNjUuMDY2NDA2IDAtMTA5LjI4NTE1Ni04OS42NTIzNDQtMTk4LjEwMTU2Mi0xOTkuMzk4NDM4LTE5Ni41NzgxMjQ4em0wIDAiLz48cGF0aCBkPSJtMTM2LjA0Mjk2OSA4MC4xMzI4MTJjNC0yLjEwOTM3NCA1LjUzOTA2Mi03LjA2NjQwNiAzLjQyOTY4Ny0xMS4wNzAzMTItMi4xMDkzNzUtNC03LjA2NjQwNi01LjUzNTE1Ni0xMS4wNTg1OTQtMy40Mjk2ODgtNzcuNjkxNDA2IDQwLjg0NzY1Ny0xMDEuODM5ODQzIDEzOC41MTU2MjYtNTUuNTcwMzEyIDIxMC41NDI5NjkgNTEuNzczNDM4IDgwLjYwOTM3NSAxNjQuMzc1IDkwLjgwMDc4MSAyMzAuMjI2NTYyIDIzLjEwNTQ2OSA0Ny42Mjg5MDctNDguODc1IDU1LjUzOTA2My0xMjQuNzEwOTM4IDE4LjI4NTE1Ny0xODIuNzAzMTI1LTM1Ljc2MTcxOS01NS42OTE0MDYtMTAyLjIzNDM3NS03OS4xNDg0MzctMTYyLjczODI4MS02Mi44MjAzMTMtNC4zNzEwOTQgMS4xODc1LTYuOTUzMTI2IDUuNjgzNTk0LTUuNzczNDM4IDEwLjA0Mjk2OSAxLjE4NzUgNC4zNzEwOTQgNS42Nzk2ODggNi45NTMxMjUgMTAuMDQyOTY5IDUuNzczNDM4IDUzLjk0OTIxOS0xNC41OTM3NSAxMTMuMDA3ODEyIDYuNTE1NjI1IDE0NC42OTE0MDYgNTUuODQ3NjU2IDI5LjcxODc1IDQ2LjI3NzM0NCAyNy4xNDg0MzcgMTA1LjQ1MzEyNS00LjUwNzgxMyAxNDguNTUwNzgxdi01MC41YzUuMjUzOTA3LS4wMTE3MTggMTAuMTg3NS0yLjA1ODU5NCAxMy44OTQ1MzItNS43NjU2MjUgNC45MjU3ODEtNC45Mzc1IDEwLjI4OTA2Mi05LjE3MTg3NSAxMC4yODkwNjItMTguNDQ5MjE5IDAtNS4yNjE3MTgtMi4wNDY4NzUtMTAuMjA3MDMxLTUuNzczNDM3LTEzLjkzMzU5M2wtMTEwLjM5NDUzMS0xMTAuMzk0NTMxYy03LjcxMDkzOC03LjcwNzAzMi0yMC4yNjE3MTktNy43MDcwMzItMjcuOTY4NzUgMGwtMTEwLjM5NDUzMiAxMTAuMzk0NTMxYy0zLjcyNjU2MiAzLjcyNjU2Mi01Ljc3NzM0NCA4LjY3MTg3NS01Ljc3NzM0NCAxMy45MzM1OTMgMCA5LjI1MzkwNyA1LjMzNTkzOCAxMy40ODQzNzYgMTAuMjg5MDYzIDE4LjQzNzUgMy43MDcwMzEgMy43MTg3NSA4LjY0MDYyNSA1Ljc2NTYyNiAxMy44OTQ1MzEgNS43NzczNDR2NTAuNDI5Njg4Yy00Ni44NTE1NjItNjQtMjYuOTcyNjU2LTE1NS44NTU0NjkgNDQuOTE0MDYzLTE5My43Njk1MzJ6bTE1MS42NzE4NzUgMjExLjI4NTE1N2MtMTIuNDk2MDk0IDExLjg5ODQzNy0yNy41MjM0MzggMjEuNDI5Njg3LTQzLjgwODU5NCAyNy42NDQ1MzF2LTE5LjExNzE4OGMwLTQuMjM4MjgxLTMuNDI5Njg4LTcuNjc1NzgxLTcuNjc1NzgxLTcuNjc1NzgxLTQuMjM4MjgxIDAtNy42Nzk2ODggMy40Mzc1LTcuNjc5Njg4IDcuNjc1NzgxdjIzLjkyNTc4MmMtMjEuMjE4NzUgNS4yNjU2MjUtNDIuOTYwOTM3IDQuOTE3OTY4LTYyLjkwMjM0My4wMTE3MTh2LTU0Ljk3NjU2MmMwLTE3LjM0Mzc1IDE0LjEwOTM3NC0zMS40NDkyMTkgMzEuNDUzMTI0LTMxLjQ0OTIxOSAxNi44MjAzMTMgMCAzMS40NDkyMTkgMTMuNDU3MDMxIDMxLjQ0OTIxOSAzMS43NzczNDQgMCA0LjIzODI4MSAzLjQ0MTQwNyA3LjY3OTY4NyA3LjY3OTY4OCA3LjY3OTY4NyAzLjk3MjY1NiAwIDcuNjc1NzgxLTMuMDU0Njg3IDcuNjc1NzgxLTguMDA3ODEyIDAtMjUuODA4NTk0LTIwLjk5NjA5NC00Ni44MDg1OTQtNDYuODA0Njg4LTQ2LjgwODU5NC0yNS44MTI1IDAtNDYuODA4NTkzIDIxLTQ2LjgwODU5MyA0Ni44MDg1OTR2NTAuMTk1MzEyYy0xNi4yNTc4MTMtNi4xNzE4NzQtMzEuMTUyMzQ0LTE1LjU1MDc4MS00My44MDg1OTQtMjcuNjUyMzQzdi03NS4xNDQ1MzFsOTAuNjE3MTg3LTkwLjYxNzE4OCA5MC42MTMyODIgOTAuNjI4OTA2em0tMjA0LjE0MDYyNS04OS4wODk4NDRjLTEuNjk1MzEzLTEuNjkxNDA2LTEuNjk1MzEzLTQuNDQ1MzEzIDAtNi4xNDA2MjUgMTE4LjQ0MTQwNi0xMTguNDQ1MzEyIDExMC42NDA2MjUtMTEwLjk4ODI4MSAxMTIuMTEzMjgxLTExMS40NDkyMTkgMS41MTk1MzEtLjQ5NjA5MyAzLjI5Mjk2OS0uMTgzNTkzIDQuNTQ2ODc1IDEuMDU0Njg4bDE3LjQxNDA2MyAxNy40MTQwNjJjNC40MTc5NjggNC40MTc5NjkgODkuNTgyMDMxIDg5LjU4NTkzOCA5Mi45ODA0NjggOTIuOTgwNDY5IDEuNjkxNDA2IDEuNjkxNDA2IDEuNjkxNDA2IDQuNDQ5MjE5IDAgNi4xNDA2MjUtNC42MTcxODcgNC42MDkzNzUtNS4yNjk1MzEgNS43NjU2MjUtNy41NTg1OTQgNS43ODUxNTZoLS4wMzEyNWMtMS4xNjQwNjIgMC0yLjI1LS40NDkyMTktMy4wNzAzMTItMS4yNjk1MzEtMTA1LjY3MTg3NS0xMDUuNjc1NzgxLTk3Ljk2MDkzOC05OC4zOTA2MjUtMTAwLjE1NjI1LTk5LjE4MzU5NC0yLjY3NTc4MS0xLjAzOTA2Mi01LjkyOTY4OC0uNDY0ODQ0LTguMTM2NzE5IDEuNzQyMTg4LTEwNS45NTcwMzEgMTA1Ljk1MzEyNS05Ny45NTMxMjUgOTguNzM0Mzc1LTEwMC41NDY4NzUgOTguNzEwOTM3LTIuMjYxNzE4LS4wMTk1MzEtMi44ODY3MTgtMS4xMjUtNy41NTQ2ODctNS43ODUxNTZ6bTAgMCIvPjwvc3ZnPg==", // url
    scaledSize: new google.maps.Size(30, 30), // scaled size
  };
  // new map
  var map = new google.maps.Map(document.getElementById("map"), options);
  // Add marker
  var marker = new google.maps.Marker({
    position: { lat: 59.40657446704078, lng: 17.922813071270934 },
    title: "Sinfrenos AB",
    map: map,
    icon: icon,
  });
  var infoWindow = new google.maps.InfoWindow({
    content: "<h3>SINFRENOS AB</h3>",
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });
}

59.40657446704078, 17.922813071270934;
