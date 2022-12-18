const initTree = () => {
    /**
     * [트리 샘플 데이터]
     * text : 트리에서 출력되는 이름
     * code : *임의로 생성한 값. 해당 트리 클릭 시, 특정 url이나 code값을 가져와야 한다면 Object 넣어서 쓰면 나중에 접근이 가능하다.
     * state : 해당 요소가 Root인 경우 해당 카테고리를 기본적으로 open 상태로 둘지, closed 상태로 둘지 결정. (해당 옵션을 넣지 않으면 default는 opened)
     * API로 수령하는 데이터의 구성(또는 순서)을 백단에서 바꾸지 못한다면 가져와서 Object 구성(또는 순서)를 변경해도 적용 가능하다.
     */
    const treeData = [
        {
            text: '언어',
            children : [
                {
                    text: '영어',
                    code: 'eng',
                },
                {
                    text: '한국어',
                    code: 'kor',
                },
                {
                    text: '컴퓨터 언어',
                    state: 'closed',
                    children : [
                        {
                            text: '자바',
                            code: 'java',
                        },
                        {
                            text: 'C언어',
                            code: 'c',
                        }
                    ]
                },
            ]
        }
    ];

    /**
     * [Tree 생성]
     * @variable {Object} : tree Options
     *      - @variable {Object} data : 생성할 트리의 데이터
     *      - @variable {String} nodeDefaultState : 최상의 Root의 기본 상태 (opened / closed)
     */
    const sampleTree = new tui.Tree('#treeDiv', {
        data: treeData,
        nodeDefaultState: 'opened'
    });

    /**
     * [Tree 선택 이벤트]
     * - @variable {Object} nodeData : nodeId를 통해 노드의 data를 들고옴.
     *      - Object 형식으로 필요한 데이터를 꺼내쓰면 된다.
     *      - 트리 생성에서 Code값이나 Url 등 필요한 데이터(값)를 미리 설정해 두고 쓰면 편리함.
     */
    sampleTree.enableFeature('Selectable').on('select', (e) => {
        console.log('@click : ', e);
        const nodeData = sampleTree.getNodeData(e.nodeId);
        console.log("@nodeData : ", nodeData);
    });
}

/**
 * [모든 ID 가져오기]
 *  - 필요해서 만들어 둠.
 *  - 모든 ID가 필요한 경우 사용.
 *  - jQuery 필요함.
 * @returns Nodes ID;
 */
getNodes = async () => {
    let ids = new Array;

    const nodes = $('.tui-tree-leaf');
    for(let node of nodes) {
        const id = $(node).attr('id');
        console.log("id", id);
        ids.push(id);
    }

    console.log("IDS : ", ids);

    return ids;
}

window.onload = () => {
    initTree();
}
