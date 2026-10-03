import { Player } from "./patterns/player.hexpat";

export function findPlayers(range: RangeDetails, health: number): Player[] {
    const pattern = Player.pattern({ health });
    return Memory.scanSync(range.base, range.size, pattern)
        .map(({ address }) => Player.at(address));
}

export function describePlayer(player: Player): string {
    const { x, y, z } = player.position;
    return `health=${player.health} lives=${player.lives} at (${x}, ${y}, ${z})`;
}
