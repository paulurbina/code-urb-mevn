<template>
    <div class="form-group" :class="{'has-error': errors.has('email') }" >
    <label class="control-label" for="email">Email</label>
    <input v-model="email" v-validate="email" data-rules="required|email" class="form-control" type="email" placeholder="Email">
    <p class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>
</div>
</template>
