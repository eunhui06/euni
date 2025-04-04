def solution(food):
    left_side = ""
    
    # 음식 배치 (0번 음식인 물 제외)
    for i in range(1, len(food)):  
        left_side += str(i) * (food[i] // 2)  # 절반만 사용
    
    return left_side + "0" + left_side[::-1]  # 가운데 물 추가 후 대칭