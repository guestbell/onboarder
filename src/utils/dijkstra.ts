export type Distances<TState extends {} = {}> = {
  [key in keyof TState]?: number;
};
export type Parents<TState extends {} = {}> = {
  [key in keyof TState]?: keyof TState | null;
};
export type Graph<TState = {}> = {
  [key in keyof TState]: { [key in keyof Exclude<TState, key>]?: number };
};
export type Result<TState = {}> = {
  distance: number;
  path: (keyof TState)[];
};

function shortestDistanceNode<TState extends {} = {}>(
  distances: Distances<TState>,
  visited: (keyof TState)[]
) {
  let shortest: keyof TState | null = null;

  for (let node in distances) {
    let currentIsShortest =
      shortest === null ||
      (distances[node] ?? Infinity) < (distances[shortest] ?? Infinity);
    if (currentIsShortest && !visited.includes(node)) {
      shortest = node;
    }
  }
  return shortest;
}

export function findShortestPath<TState extends {} = {}>(
  graph: Graph<TState>,
  startNode: keyof TState,
  endNode: keyof TState
): Result<TState> {
  if (startNode === endNode) {
    return {
      distance: 0,
      path: [],
    };
  }
  // establish object for recording distances from the start node
  let distances: Distances<TState> = {};
  distances[endNode] = Infinity;
  distances = { ...distances, ...graph[startNode] };

  // track paths
  let parents: Parents<TState> = {};
  parents[endNode] = null;
  let child: keyof TState;
  for (child in graph[startNode]) {
    parents[child] = startNode;
  }

  // track nodes that have already been visited
  let visited: (keyof TState)[] = [];

  // find the nearest node
  let node = shortestDistanceNode(distances, visited);

  // for that node
  while (node) {
    // find its distance from the start node & its child nodes
    let distance = distances[node] ?? Infinity;
    let children = graph[node];
    let endDistance = distances[endNode] ?? Infinity;
    // for each of those child nodes
    if (!distances[endNode] || endDistance > distance) {
      for (child in children) {
        // make sure each child node is not the start node
        if (String(child) === String(startNode)) {
          continue;
        } else {
          // save the distance from the start node to the child node
          let newDistance = distance + (children[child] ?? Infinity);
          const childDistance = distances[child];
          // if there's no recorded distance from the start node to the child node in the distances object
          // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
          // save the distance to the object
          // record the path
          if (
            (!childDistance || childDistance > newDistance) &&
            (!distances[endNode] || endDistance > newDistance)
          ) {
            distances[child] = newDistance;
            parents[child] = node;
          }
        }
      }
    }
    // move the node to the visited set
    visited.push(node);
    // move to the nearest neighbor node
    node = shortestDistanceNode(distances, visited);
  }

  // using the stored paths from start node to end node
  // record the shortest path
  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();

  // return the shortest path from start node to end node & its distance
  let results = {
    distance: distances[endNode] ?? Infinity,
    path: shortestPath,
  };

  return results;
}

export function findShortestPathMultipleEndNodes<TState extends {} = {}>(
  graph: Graph<TState>,
  startNode: keyof TState,
  endNodes: (keyof TState)[]
) {
  const all = endNodes
    .map((endNode) => findShortestPath(graph, startNode, endNode))
    .sort((a, b) => (a.distance < b.distance ? 1 : -1));
  return all[0];
}
