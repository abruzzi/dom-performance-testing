<template>
    <div class="column-card">    
        <div class="simple-card" column="column">
            <div class="overdue-alert-frame" >
            </div>
            <div class="clearfix" >
                <div class="card-head">
                    <div class="card-type">
                    </div>

                    <span class="card-number">
                        {{item.cardNumber}}
                    </span>
                    <span class="stay-time">
                        {{item.stayTime}}
                    </span>
                    <span title="Link Card">
                    </span>
                </div>
                <div class="card-content">
                    <div class="card-owner" :title="item.cardOwner">
                        <span class="card-owner-name" >
                            {{item.cardOwner}}
                        </span>
                    </div>
                    <div class="card-title" :title="item.title">
                        {{item.title}}
                    </div>
                </div>
                <div class="card-footer">
                </div>
            </div>
            <div class="card-flag-group">
                <span class="card-flag-item icon-Flaghide24" title="Flag">
                </span>
                <span class="card-flag-item icon-Riskhide24" title="Risk">
                </span>
                <span class="card-flag-item icon-Blockhide24" title="Block">
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'card',
  props: ['item']
}
</script>
